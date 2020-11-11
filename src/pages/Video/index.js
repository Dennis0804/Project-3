import React from 'react'
import './video.less'
const Video = () => {
    return (
        <div className='video'>
            <video controls src={require('../../assets/videos/a.mp4')}></video>
        </div>
    )
}

export default Video
