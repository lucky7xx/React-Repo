import React, { useRef } from 'react'
import VideoData from './VideoData';
import VideoComponent from './VideoComponent';
import { VideoDataContainer } from './AppStyled';

function VideoCard() {


    return (
        <VideoDataContainer>

            {VideoData.map((item, index) => {
                return (
                    <VideoComponent key={index} source={item.sources} />
                )
            })}


        </VideoDataContainer>
    )
}

export default VideoCard