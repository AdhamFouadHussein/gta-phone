import React, {useState, useRef, useEffect} from 'react';
import './style.css';
import recordIcon from '../../../assets/icons/tiktok/video/Record Button.svg';
import recordingIcon from '../../../assets/icons/tiktok/video/recordingIcon.svg';
import emojiEffect from '../../../assets/icons/tiktok/video/Effects Illustration.svg';

import useUploadedVideoStore from "../../store/uplaodedVideoStore/uplaodedVideoStore";
import VideoPicker from "../VideoPicker/VideoPicker";
import {useNavigate} from "react-router-dom";


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
    const [mediaRecorder, setMediaRecorder] = useState<any>(null);
    const videoRef = useRef<any>(null);
    const [stream, setStream] = useState<any>(null);
    const {setVideo} = useUploadedVideoStore();
    const router = useNavigate();
    // const startScreenRecording = async () => {
    //     try {
    //         // Request screen stream from the user's display
    //         const userStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    //
    //         // Set the stream to the video element
    //         if (videoRef.current) {
    //             videoRef.current.srcObject = userStream;
    //             videoRef.current.play();
    //         }
    //
    //         // Save the stream for recording
    //         setStream(userStream);
    //     } catch (error:any) {
    //         // Improved error handling
    //         if (error.name === 'NotAllowedError') {
    //             console.error('Permission denied for screen sharing. Ensure that your browser allows screen sharing and that you have granted the necessary permissions.');
    //         } else if (error.name === 'NotFoundError') {
    //             console.error('No screen or window found to share. Ensure that you have a screen or window available for sharing.');
    //         } else if (error.name === 'AbortError') {
    //             console.error('Screen sharing was aborted by the user.');
    //         } else {
    //             console.error('An unexpected error occurred while accessing the screen: ', error);
    //         }
    //     }
    // };
    // useEffect(() => {
    //     startScreenRecording()
    // }, []);

    // const startRecording = () => {
    //     if (stream) {
    //         const recorder = new MediaRecorder(stream);
    //         const chunks: any[] = [];
    //
    //         recorder.ondataavailable = (event) => {
    //             if (event.data.size > 0) {
    //                 chunks.push(event.data);
    //             }
    //         };
    //
    //         recorder.onstop = () => {
    //             const blob = new Blob(chunks, {type: 'video/webm'});
    //             const url = URL.createObjectURL(blob);
    //             videoRef.current.srcObject = url;
    //             videoRef.current.play();
    //             // Create a link to download the recorded video
    //             const a = document.createElement('a');
    //             a.href = url;
    //             a.download = 'recorded-video.webm';
    //             a.textContent = 'Download recorded video';
    //             document.body.appendChild(a);
    //         };
    //
    //         recorder.start();
    //         setMediaRecorder(recorder);
    //         setIsRecording(true);
    //     }
    // };
    //
    // const stopRecording = () => {
    //     if (mediaRecorder) {
    //         mediaRecorder.stop();
    //         setIsRecording(false);
    //     }
    //     if (stream) {
    //         stream.getTracks().forEach(track => track.stop());
    //         setStream(null);
    //     }
    // };

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);

    useEffect(() => {
        const startButton = document.getElementById("start") as HTMLButtonElement;
        const stopButton = document.getElementById("stop") as HTMLButtonElement;
        const canvas = document.getElementById("camera-canvas") as HTMLCanvasElement;

        loadScript("nui://utk_render/script.js").then(() => {
            if (startButton && stopButton && canvas) {
                const stream = canvas.captureStream();
                mediaRecorderRef.current = new MediaRecorder(stream);

                mediaRecorderRef.current.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        recordedChunksRef.current.push(event.data);
                    }
                };

                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(recordedChunksRef.current, {
                        type: "video/webm",
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "recording.webm";
                    a.click();
                    URL.revokeObjectURL(url);
                    recordedChunksRef.current = [];
                };

                startButton.addEventListener("click", () => {
                    canvas.style.display = "block";
                    (window as any).MainRender.renderToTarget(canvas);
                    stopButton.disabled = false;
                    startButton.disabled = true;
                    mediaRecorderRef.current?.start();
                });

                stopButton.addEventListener("click", () => {
                    (window as any).MainRender.stop();
                    stopButton.disabled = true;
                    startButton.disabled = false;
                    mediaRecorderRef.current?.stop();
                });
            }
        }).catch(error => {
            console.error(error);
        });

        // Cleanup event listeners on component unmount
        return () => {
            if (startButton && stopButton) {
                startButton.removeEventListener("click", () => {
                });
                stopButton.removeEventListener("click", () => {
                });
            }
        };
    }, []);


    return (
        <div className={'camera-wrapper'}>
            <canvas className={"screen-view"} id="camera-canvas"></canvas>
            {/*<video className={"screen-view"} ref={videoRef} autoPlay style={{width: '100%'}}>*/}
            {/*</video>*/}
            <div className={'action-bar'}>
                <div>
                    <img width={34} height={34} src={emojiEffect}/>
                    <div style={{fontSize: 12}}>Effect</div>
                </div>
                {!isRecording ?
                    <img id="start"  className={'recording-icon'} width={80} height={80}
                         src={recordIcon}/> :
                    <img id="stop"  className={'recording-icon'} width={80} height={80}
                         src={recordingIcon}/>
                }

                <VideoPicker
                    getUploadedVideoUrl={(video) => {
                        setVideo(video);
                        setTimeout(() => {
                            router("/tiktok-show-uploaded-video");
                        }, 10);
                    }}/>
            </div>
        </div>
    );
}
