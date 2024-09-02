import style from "./style.module.css";
import line from "../../../assets/icons/iphoneCamera/Line 3.svg";
import rotateIcon from "../../../assets/icons/iphoneCamera/Rotate.svg";
import recordingIcon from "../../../assets/icons/iphoneCamera/Shutter.svg";
import recordIcon from "../../../assets/icons/tiktok/video/Record Button.svg";
import galleryIcon from "../../../assets/icons/iphoneCamera/gallery.png";
import videoRecordingIcon from "../../../assets/icons/tiktok/video/recordingIcon.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaStore } from "../../store/captruedMedia/captruedMediaStor";

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

export default function IphoneCameraHomePage() {
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [flash, setFlash] = useState(false); // State to control the flash effect
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const [currentCameraType, setCurrentCameraType] = useState<"video" | "photo">(
    "photo"
  );
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const navigator = useNavigate();
  const { imagePreview, setImagePreview, setVideoPreview } = useMediaStore();
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

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isCanvasReady, canvasRef, currentCameraType]);

  // Function to handle photo capture
  const handleCaptureClick = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png"); // Get the image as a base64 URL
      setImagePreview(dataURL); // Store the captured image in state
      // Trigger the flash effect
      setFlash(true);
      setTimeout(() => setFlash(false), 200); // Flash for 200ms
    }
  };

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
        setVideoPreview(videoUrl);
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

  return (
    <div className={style.container}>
      <canvas
        className={style.cameraView}
        id="camera-canvas"
        ref={canvasRef}
      ></canvas>
      <div
        className={`${style.flashOverlay} ${flash ? style.flashActive : ""}`}
      ></div>
      <div className={style.cameraType}>
        <div
          className={currentCameraType == "video" ? style.selectedType : ""}
          onClick={() => setCurrentCameraType("video")}
        >
          VIDEO
        </div>
        <div
          className={currentCameraType == "photo" ? style.selectedType : ""}
          onClick={() => setCurrentCameraType("photo")}
        >
          PHOTO
        </div>
      </div>
      <div className={style.actionBar}>
        <div>
          <img
            height={40}
            width={40}
            onClick={() => {
              if (currentCameraType == "video") {
                navigator("/iphone-camera-captured-video");
              } else {
                navigator("/iphone-camera-captured-image");
              }
            }}
            src={imagePreview ?? galleryIcon}
            className={style.icon}
          />
        </div>
        <div>
          <img
            onClick={() => {
              if (currentCameraType == "photo") {
                handleCaptureClick();
              } else {
                if (isRecording) {
                  stopRecording();
                } else {
                  startRecording();
                }
              }
            }} // Capture the photo on click
            className={style.icon}
            src={
              currentCameraType == "photo"
                ? recordingIcon
                : isRecording
                ? videoRecordingIcon
                : recordIcon
            }
          />
        </div>
        <div>
          <img className={style.icon} src={rotateIcon} />
        </div>
      </div>
      <div className={style.footer}>
        <img src={line} />
      </div>
    </div>
  );
}
