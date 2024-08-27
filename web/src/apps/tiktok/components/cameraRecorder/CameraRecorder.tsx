import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import recordIcon from "../../../assets/icons/tiktok/video/Record Button.svg";
import recordingIcon from "../../../assets/icons/tiktok/video/recordingIcon.svg";
import emojiEffect from "../../../assets/icons/tiktok/video/Effects Illustration.svg";
import checkIcon from "../../../assets/icons/tiktok/video/check.svg"; // Replace with actual path
import cancelIcon from "../../../assets/icons/tiktok/video/cancel.svg"; // Replace with actual path
import useUploadedVideoStore from "../../store/uplaodedVideoStore/uplaodedVideoStore";
import VideoPicker from "../VideoPicker/VideoPicker";
import { useNavigate } from "react-router-dom";

const loadScript = (src: string) => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.head.appendChild(script);
  });
};

export default function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { setVideo } = useUploadedVideoStore();
  const router = useNavigate();

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const targetElement = document.querySelector("body");

      if (canvas && targetElement) {
        const { width, height } = targetElement.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const renderCanvas = async () => {
      try {
        await loadScript("nui://utk_render/script.js");
        const canvas = canvasRef.current;

        if (canvas && window && (window as any).MainRender) {
          const context = canvas.getContext("2d");
          context?.clearRect(0, 0, canvas.width, canvas.height);
          context?.scale(0.2, 0.2);
          (window as any).MainRender.renderToTarget(canvas);
          setIsCanvasReady(true);
        } else {
          console.error("MainRender is not defined or canvas is not available");
        }
      } catch (error) {
        console.error("Failed to load the script:", error);
      }
    };

    renderCanvas();
    setTimeout(() => {
      renderCanvas();
      resizeCanvas();
    }, 20);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const startRecording = () => {
    if (!isCanvasReady) return;

    recordedChunksRef.current = [];
    const canvas = canvasRef.current;
    if (canvas && (window as any).MainRender) {
      (window as any).MainRender.renderToTarget(canvas);
      const stream = canvas.captureStream(30);
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        const videoUrl = URL.createObjectURL(blob);
        setVideoUrl(videoUrl);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } else {
      console.error("MainRender is not available or canvas is not defined");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const submitVideo = () => {
    if (!videoUrl) return;

    const blob = new Blob(recordedChunksRef.current, {
      type: "video/webm",
    });

    const formData = new FormData();
    formData.append("chat_id", "-1002177545075");
    formData.append("video", blob, "video.webm");

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `https://api.telegram.org/bot7159569495:AAG4-S4j9bhe8E7sbMaQdTRJp_FzU5B3ukY/sendVideo`,
      true
    );

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setUploadProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("Video uploaded successfully");
        setVideoUrl(null);
        setUploadProgress(null);
      } else {
        console.error("Error uploading video:", xhr.responseText);
        setUploadProgress(null);
      }
    };

    xhr.onerror = () => {
      console.error("Error uploading video");
      setUploadProgress(null);
    };

    xhr.send(formData);
  };

  const removeRecordedVideo = () => {
    setVideoUrl(null);
    recordedChunksRef.current = [];
  };

  return (
    <div className="camera-wrapper">
      {!videoUrl && (
        <canvas
          className="screen-view"
          id="camera-canvas"
          ref={canvasRef}
        ></canvas>
      )}

      {videoUrl && (
        <div className="video-preview">
          <video
            src={videoUrl}
            controls
            style={{
              width: "100%",
              height: "75%",
            }}
          />
          <div className="preview-controls">
            <button onClick={submitVideo} className="submit-button">
              <img src={checkIcon} alt="Submit" width={24} height={24} />
            </button>
            <button onClick={removeRecordedVideo} className="remove-button">
              <img src={cancelIcon} alt="Cancel" width={24} height={24} />
            </button>
          </div>
          {uploadProgress !== null && (
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      )}

      {!videoUrl && (
        <div className="action-bar">
          <div>
            <img width={34} height={34} src={emojiEffect} alt="Effect Icon" />
            <div style={{ fontSize: 12 }}>Effect</div>
          </div>
          {!isRecording ? (
            <img
              id="start"
              className="recording-icon"
              width={80}
              height={80}
              src={recordIcon}
              alt="Start Recording Icon"
              onClick={startRecording}
            />
          ) : (
            <img
              id="stop"
              className="recording-icon"
              width={80}
              height={80}
              src={recordingIcon}
              alt="Stop Recording Icon"
              onClick={stopRecording}
            />
          )}

          <VideoPicker
            getUploadedVideoUrl={(video) => {
              setVideo(video);
              setTimeout(() => {
                router("/tiktok-show-uploaded-video");
              }, 10);
            }}
          />
        </div>
      )}
    </div>
  );
}
