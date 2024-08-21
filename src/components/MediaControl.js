// MediaControls.js
import React from "react";
import { useState } from "react";
import "../styles/mediaControl.css";

const MediaControls = () => {
  const [isPaused, setPauseStatus] = useState(false);

  const handlePlay = () => {
    setPauseStatus(false);
    console.log("Play");
  };

  const handlePause = () => {
    setPauseStatus(true);
    console.log("Pause");
  };

  const handleRewind = () => {
    console.log("Rewind");
  };
  return (
    <div className="media-controls">
      <button
        onClick={handleRewind}
        className="media-control-button rewind-button"
        disabled={!isPaused}
      >
        ⏪
      </button>
      {isPaused ? (
        <button
          onClick={handlePlay}
          className="media-control-button play-button"
        >
          ▶️
        </button>
      ) : (
        <button
          onClick={handlePause}
          className="media-control-button pause-button"
        >
          ⏸️
        </button>
      )}
    </div>
  );
};

export default MediaControls;
