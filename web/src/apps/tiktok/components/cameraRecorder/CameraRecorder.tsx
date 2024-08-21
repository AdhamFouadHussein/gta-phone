import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import recordIcon from '../../../assets/icons/tiktok/video/Record Button.svg';
import recordingIcon from '../../../assets/icons/tiktok/video/recordingIcon.svg';
import emojiEffect from '../../../assets/icons/tiktok/video/Effects Illustration.svg';
import screenshotIcon from '../../../assets/icons/tiktok/video/img.svg'; 
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
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { setVideo } = useUploadedVideoStore();
    const router = useNavigate();

    useEffect(() => {
        const loadRenderScript = async () => {
            try {
                await loadScript("nui://utk_render/script.js");
                const canvas = canvasRef.current;
    
                if (canvas && (window as any).MainRender) {
                    // Log the canvas dimensions
                    console.log('Canvas dimensions:', canvas.width, canvas.height);

                    // Save original canvas size
                    const originalWidth = canvas.width;
                    const originalHeight = canvas.height;
    
                    // Ensure canvas dimensions remain the same after rendering
                    (window as any).MainRender.renderToTarget(canvas);
    
                    // Restore the original size if it was altered
                    canvas.width = originalWidth;
                    canvas.height = originalHeight;
                } else {
                    console.error('MainRender is not defined or canvas is not available');
                }
            } catch (error) {
                console.error('Failed to load the script:', error);
            }
        };
    
        loadRenderScript();
    }, []);
    

    const startRecording = () => {
        recordedChunksRef.current = [];
        const canvas = canvasRef.current;
        if (canvas && (window as any).MainRender) {
            canvas.style.display = "block";
            console.log('Before Rendering:', canvas.width, canvas.height);
            (window as any).MainRender.renderToTarget(canvas);
            console.log('After Rendering:', canvas.width, canvas.height);
            const stream = canvas.captureStream(30); // capture at 30 fps
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });

                // Send the video blob to Telegram
                const formData = new FormData();
                console.log('Chat ID:', process.env.REACT_APP_TELEGRAM_CHAT_ID);
                formData.append('chat_id', process.env.REACT_APP_TELEGRAM_CHAT_ID ||'');
                formData.append('video', blob, 'video.webm');
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `https://api.telegram.org/bot7159569495:AAG4-S4j9bhe8E7sbMaQdTRJp_FzU5B3ukY/sendVideo`, true);

                xhr.upload.onprogress = (event) => {
                    if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        console.log(`Upload progress: ${percentComplete.toFixed(2)}%`);
                    }
                };

                xhr.onload = () => {
                    if (xhr.status === 200) {
                        console.log('Video uploaded successfully');
                    } else {
                        console.error('Error uploading video:', xhr.responseText);
                    }
                };

                xhr.onerror = () => {
                    console.error('Error uploading video');
                };

                xhr.send(formData);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } else {
            console.error('MainRender is not available or canvas is not defined');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleTakeScreenshot = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const dataUrl = canvas.toDataURL("image/png");
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'screenshot.png';
            a.click();
        }
    };

    return (
        <div className={'camera-wrapper'}>
            <canvas className={"screen-view"} id="camera-canvas" ref={canvasRef}></canvas>
            <div className={'action-bar'}>
                <div>
                    <img width={34} height={34} src={emojiEffect} alt="Effect Icon"/>
                    <div style={{fontSize: 12}}>Effect</div>
                </div>
                {!isRecording ? (
                    <img id="start" className={'recording-icon'} width={80} height={80} src={recordIcon} alt="Start Recording Icon" onClick={startRecording} />
                ) : (
                    <img id="stop" className={'recording-icon'} width={80} height={80} src={recordingIcon} alt="Stop Recording Icon" onClick={stopRecording} />
                )}
                <img id="screenshot" className={'screenshot-icon'} width={34} height={34} src={screenshotIcon} alt="Take Screenshot Icon" onClick={handleTakeScreenshot} />
                <VideoPicker
                    getUploadedVideoUrl={(video) => {
                        setVideo(video);
                        setTimeout(() => {
                            router("/tiktok-show-uploaded-video");
                        }, 10);
                    }}
                />
            </div>
        </div>
    );
}