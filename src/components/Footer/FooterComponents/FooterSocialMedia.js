import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

import facebook from '../../../img/facebook.png'
import instagram from '../../../img/instagram.png'
import email from '../../../img/gmail.png'
import phone from '../../../img/mobile-phone.png'
import youtube from '../../../img/youtube.png'


class FooterSocialMedia extends Component {
    render() {
        return (
            <Col xs={6} sm={4} className="footer-social-media">
                <div className="social-media-text">
                    <Image src={facebook} rounded className="social-media-icon"/>
                    <span><a href="https://www.facebook.com/maxdron90/?fb_dtsg_ag=AdwLCdYxnqujM6oosS0Yl5QKZj5hFQaecDKN4kY6pVjHsA%3AAdxQwiqbOm_GDheLA1zBvLUHJw-j8Ye20aEhTXNx3mu4sg">Facebook</a></span>
                </div>
                <div className="social-media-text">
                    <Image src={instagram} rounded className="social-media-icon"/>
                    <span><a
                        href="https://www.instagram.com/michalrenka/">Instagram</a></span>
                </div>
                <div className="social-media-text">
                    <Image src={youtube} rounded className="social-media-icon"/>
                    <span><a href="https://www.youtube.com/channel/UCGdz3-bgEpM__k60MvVrxHg">Youtube</a></span>
                </div>
                <div className="social-media-text">
                    <Image src={email} rounded className="social-media-icon"/>
                    <span><a href="mailto:michal.renka@op.pl<">michal.renka@op.pl</a></span>
                </div>
                <div className="social-media-text">
                    <Image src={phone} rounded className="social-media-icon"/>
                    <span><a href="#">603 086 390</a></span>
                </div>
            </Col>
        );
    }
}

export default FooterSocialMedia;