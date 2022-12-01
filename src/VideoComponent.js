import React, { useRef, useState } from 'react'
import { ButtonDiv, ButtonStyle, VideoDiv } from './AppStyled';

function VideoComponent(props) {


    const [button, setButton] = useState(false);

    const videoRef = useRef();

    const handlePlay = () => {
        console.log("play");
        videoRef.current.play()
    }

    const handlePause = () => {
        console.log("Pause");
        videoRef.current.pause()
    }

    const handleMouseEnter = () => {
        setButton(true);
    }


    const handleMouseLeave = () => {
        setButton(false);
    }

    return (
        <VideoDiv
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >


            <video
                src={props.source}
                muted='muted'
                height="150px"
                width="300px"
                ref={videoRef}
            />
            <ButtonDiv>
                <ButtonStyle onClick={handlePlay}>Play</ButtonStyle>
                <ButtonStyle onClick={handlePause}>Pause</ButtonStyle>
            </ButtonDiv>

        </VideoDiv>
    )
}

export default VideoComponent