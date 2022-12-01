import React, { useRef, useState } from 'react'
import { ButtonDiv, ButtonStyle, VideoDiv } from './AppStyled';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

function VideoComponent(props) {


    const [displayButton, setDisplayButton] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef();

    const handlePlay = () => {
        console.log("play");
        videoRef.current.play();
        setIsPlaying(true)
    }

    const handlePause = () => {
        console.log("Pause clicked");
        videoRef.current.pause();
        setIsPlaying(false)
    }

    const handleMouseEnter = () => {
        setDisplayButton(true);
        console.log("Hello");
    }


    const handleMouseLeave = () => {
        setDisplayButton(false);
    }

    return (
        <VideoDiv
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            {displayButton ? (
                <ButtonDiv>
                    {isPlaying === true ? (<ButtonStyle onClick={handlePause}><AiFillPauseCircle style={{ fontSize: "20px" }} /></ButtonStyle>) : (<ButtonStyle onClick={handlePlay}><AiFillPlayCircle style={{ fontSize: "20px" }} /></ButtonStyle>)}
                </ButtonDiv>
            ) : null}

            <video
                src={props.source}
                // muted='false'
                height="150px"
                width="300px"
                ref={videoRef}
            />

            <h3>{props.title}</h3>


        </VideoDiv>
    )
}

export default VideoComponent