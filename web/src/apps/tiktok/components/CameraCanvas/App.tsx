import React, { useEffect, useRef } from "react";
import "./App.css";

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

const App: React.FC = () => {
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
        startButton.removeEventListener("click", () => {});
        stopButton.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="nui-wrapper">
      <canvas id="camera-canvas"></canvas>
      <div className="button-container">
        <button id="start">Start</button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
};

export default App;