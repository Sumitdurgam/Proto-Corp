import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

 useEffect(() => {
    
  // If no video source, stop here

  if (!src) return;

  // Checking Hls.js library

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoRef.current);

    // Cleanup when component changes or unmounts

    return () => hls.destroy();
  }


  if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
    videoRef.current.src = src;
  }
}, [src]);

  return (
    <video
      ref={videoRef}
      width="100%"
      controls
      autoPlay
      muted
      style={{ backgroundColor: "#000" }}
    />
  );
};

export default VideoPlayer;
