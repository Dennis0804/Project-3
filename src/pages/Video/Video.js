import React from 'react'
import './video.less'
import {Button} from 'antd';
import {Link} from 'react-router-dom'

const Video = () => {
    return (
        <div className='video'>
            <div className='left'>
                <video controls src={ require('../../assets/videos/react.mp4') }></video>
                <p>
                    <Button size='large' type='primary'><Link to='/dotest'>Start Testing</Link></Button>
                    <Button size='large' type='primary'><Link to='/doassignment'>Do Assignment</Link></Button>
                </p>

            </div>
            <ol className="contentList">
                <li>course content01</li>
                <li>course content02</li>
                <li>course content03</li>
                <li>course content04</li>
                <li>course content05</li>
                <li>course content06</li>
            </ol>
        </div>
    )
}

export default Video
