"use client";
import { useState, useRef } from "react";

export default function VideoBackground() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://automationalien.s3.us-east-1.amazonaws.com/Light+Blue+Music+Ocean+Waves+Inspirational+Video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-3a9 9 0 1 1 18 0v3M5 18v-2a7 7 0 1 1 14 0v2M7 18v-1a5 5 0 1 1 10 0v1" />
          <rect x="4" y="18" width="4" height="4" rx="2" className={muted ? 'fill-gray-400' : 'fill-green-500'} />
          <rect x="16" y="18" width="4" height="4" rx="2" className={muted ? 'fill-gray-400' : 'fill-green-500'} />
        </svg>
      </button>
    </>
  );
} 