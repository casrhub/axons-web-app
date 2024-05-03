"use client";

import { useEffect, useState, useRef } from "react";

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function MicrophoneComponent() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [serverResponse, setServerResponse] = useState("");


  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setTranscript(transcript);
    };
    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = async () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current.onend = async () => {
        setIsRecording(false);
        setRecordingComplete(true);
  
        const endpoint = '/api/product';
        try {
          const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ transcript: transcript })
          });
          const responseData = await response.json();
          if (responseData && responseData.response) {
            console.log(responseData)
            setServerResponse(responseData.response);  // Assuming responseData has a 'response' key
          }
        } catch (error) {
          console.error('Error sending transcript:', error);
          setServerResponse("Failed to fetch response.");
        }
      };
    }
  };
  

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

// Render the microphone component with appropriate UI based on recording state
return (
    <div className="flex items-center justify-center h-1/4">
<div className="w-full max-w-4xl px-4 py-8"> {/* Set maximum width and padding */}
    {(isRecording || transcript || serverResponse) && (
    <div className="m-auto rounded-lg shadow-lg p-6 bg-white"> {/* Rounded corners and shadow for better focus */}
        <div className="flex justify-between items-center">
        <div>
            <p className="text-lg font-semibold text-gray-700">
            {recordingComplete ? "Recorded" : "Recording..."} {/* Enhanced font size and weight */}
            </p>
            <p className="text-gray-500">
            {recordingComplete
                ? "Thanks for talking."
                : "Please start speaking..."} {/* Improved text for instructions */}
            </p>
        </div>
        {isRecording && (
            <div className="rounded-full w-6 h-6 bg-red-500 animate-pulse"></div>
        )}
        </div>

        {transcript && (
        <div className="mt-4 p-4 border rounded-md">
            <p className="text-gray-800">{transcript}</p> {/* Transcript box styling */}
        </div>
        )}

        {transcript && serverResponse && (
            <div className="text-center my-4">
                <h3 className="text-lg text-gray-700">Feedback on your explanation</h3>
            </div>
        )}

        {serverResponse && (
            <div className="mt-4 p-4 border rounded-md">
                {serverResponse.split('\n').map((line, index) => (
                    <p key={index} className="text-slate-900 mb-2">{line}</p>
                ))}
            </div>
        )}

    </div>
    )}

    <div className="flex justify-center mt-10">
    {isRecording ? (
        // Button for stopping recording
        <button
        onClick={handleToggleRecording}
        className="flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full w-24 h-24 focus:outline-none"
        >
        <svg
            className="w-16 h-16 text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
        </button>
    ) : (
        // Button for starting recording
        <button
        onClick={handleToggleRecording}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full w-24 h-24 focus:outline-none"
        >
        <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white"
        >
            <path
            fill="currentColor" // Adjust fill color for consistency
            d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
            />
        </svg>
        </button>
    )}
    </div>
</div>
</div>

);
}