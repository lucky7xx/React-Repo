import React, { useRef, useState } from "react";
import { ButtonDiv, ButtonStyle, VideoDiv, TitleStyle } from "./AppStyled";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

function VideoComponent(props) {
  const [displayButton, setDisplayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  const handlePlay = () => {
    console.log("play");
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log("Pause clicked");
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    // videoRef.current.play();
    setDisplayButton(true);
    console.log("Hello");
  };

  const handleMouseLeave = () => {
    // videoRef.current.pause();
    setDisplayButton(false);
  };

  return (
    <VideoDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayButton ? (
        <ButtonDiv>
          {isPlaying === true ? (
            <ButtonStyle onClick={handlePause}>
              <AiFillPauseCircle style={{ fontSize: "50px" }} />
            </ButtonStyle>
          ) : (
            <ButtonStyle onClick={handlePlay}>
              <AiFillPlayCircle style={{ fontSize: "50px" }} />
            </ButtonStyle>
          )}
        </ButtonDiv>
      ) : null}

      <video
        src={props.source}
        // muted='false'
        height="150px"
        width="300px"
        ref={videoRef}
      />

      <TitleStyle>{props.title}</TitleStyle>
    </VideoDiv>
  );
}

export default VideoComponent;
