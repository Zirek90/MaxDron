import React, {Component} from 'react';

import HeaderTitle from "./HeaderTitle";
import HeaderVideo from '../../../img/Czym się zajmujemy - MaxDron.mp4';
import VideoCover from 'react-video-cover';

class HeaderMovie extends Component {
    render() {
        const videoOptions = {
            src: HeaderVideo,
            autoPlay: true,
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
            <div className="header-movie-wrapper">
                <div className="header-movie">
                    <div className="overlay">
                        <HeaderTitle/>
                    </div>
                    <VideoCover
                        videoOptions={videoOptions}
                    />
                </div>
            </div>
        );
    }
}

export default HeaderMovie;
