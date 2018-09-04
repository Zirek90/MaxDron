import React, {Component} from 'react';

import HeaderTitle from "./HeaderTitle";
import HeaderVideo from '../../../img/Olivia Business Centre - Olivia Star 180m (01.2018) MaxDron.mp4';
import VideoCover from 'react-video-cover';

class HeaderMovie extends Component {
    render() {
        const videoOptions = {
            src: HeaderVideo,
            autoPlay:true,
            muted: true,
            ref: videoRef => {
                this.videoRef = videoRef;
            },
            onClick: () => {
                if (this.videoRef && this.videoRef.paused) {
                    this.videoRef.play();
                } else if (this.videoRef) {
                    this.videoRef.pause();
                }
            },
            title: 'click to play/pause',
        };
        return (
            <div style={{
                // width: '300px',
                // height: '300px',
                overflow: 'hidden',
            }}>
                <VideoCover
                    videoOptions={videoOptions}
                />
            </div>
        );
    }
}

export default HeaderMovie;
