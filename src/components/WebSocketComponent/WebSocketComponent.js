import React, { useEffect, useState, useRef } from "react";

function WebSocketComponent() {
  const [buttonStatus, setButtonStatus] = useState("No Status");
  const mediaRecorderRef = useRef(null); // MediaRecorder 객체 저장
  const [audioChunks, setAudioChunks] = useState([]); // 녹음된 오디오 조각들 저장

  useEffect(() => {
    const controller = new AbortController();

    // 1. WebSocket 서버와 연결
    const ws = new WebSocket("ws://192.168.35.6:8050");

    // WebSocket 연결 성공 시 로그 출력
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    // WebSocket 메시지 수신 시 로그 출력 및 상태 처리
    ws.onmessage = async (event) => {
      console.log("Message from server:", event.data);

      if (event.data === "BUTTON:UP") {
        setButtonStatus("Button Released: Start Recording");
        await startRecording();
      } else if (event.data === "BUTTON:DOWN") {
        setButtonStatus("Button Pressed: Stop Recording");
        stopRecording();
      }
    };

    // WebSocket 에러 처리 및 로그 출력
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // WebSocket 연결 종료 시 로그 출력
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // 컴포넌트 언마운트 시 WebSocket 연결 닫기
    return () => controller.abort();
  }, []);

  // 음성 녹음 시작 함수
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      };

      mediaRecorder.start();
      console.log("Recording started");
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // 음성 녹음 중단 함수
  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      console.log("Recording stopped");

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log("Audio recorded:", audioUrl);

        // 오디오 파일을 처리하거나 서버로 전송 가능
      };

      setAudioChunks([]);
    }
  };

  return (
    <div>
      <h1>WebSocket Button Status</h1>
      <p>Status: {buttonStatus}</p>
    </div>
  );
}

export default WebSocketComponent;
