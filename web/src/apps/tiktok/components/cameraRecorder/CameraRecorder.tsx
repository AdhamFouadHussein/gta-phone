import React, {useState, useRef, useEffect} from 'react';

export default function CameraRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<any>(null);
    const videoRef = useRef<any>(null);
    const [stream, setStream] = useState<any>(null);

    // Start the camera and recording
    const startCamera = async () => {
        try {
            // Request video stream from the user's camera
            const userStream = await navigator.mediaDevices.getUserMedia({video: true});
            setStream(userStream);
            if (videoRef.current) {
                videoRef.current.srcObject = userStream;
                videoRef.current.play();
            }
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    };

    useEffect(() => {
        startCamera()
    }, []);


    const startRecording = () => {
        if (stream) {
            const recorder = new MediaRecorder(stream);
            const chunks: any[] = [];

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(chunks, {type: 'video/webm'});
                const url = URL.createObjectURL(blob);

                // Create a link to download the recorded video
                const a = document.createElement('a');
                a.href = url;
                a.download = 'recorded-video.webm';
                a.textContent = 'Download recorded video';
                document.body.appendChild(a);
            };

            recorder.start();
            setMediaRecorder(recorder);
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    return (
        <div>
            <video ref={videoRef} autoPlay style={{width: '100%'}}></video>
            <div>
                <button onClick={startCamera} disabled={isRecording}>
                    Start Camera
                </button>
                <button onClick={startRecording} disabled={isRecording || !stream}>
                    Start Recording
                </button>
                <button onClick={stopRecording} disabled={!isRecording}>
                    Stop Recording
                </button>
            </div>
        </div>
    );
}