import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar"

function Video({likes, messages, shares}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
      ></video>
      <VideoSidebar 
      likes={likes}
      messages={messages}
      shares={shares}
      />      
      <VideoFooter />
      
    </div>
  );
}

export default Video;
