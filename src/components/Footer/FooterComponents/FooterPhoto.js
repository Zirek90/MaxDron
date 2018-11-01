import React from 'react';
import { Col, Image } from 'react-bootstrap';

import photo from '../../../img/max-dron-footer.jpg'
import FooterAboutMe from "./FooterAboutMe";

// class FooterPhoto extends Component {
//     render() {
    const FooterPhoto = () => {
        return (
            <Col xs={12} sm={2} className="footer-wrapper">
                <Image src={photo} rounded responsive className="footer-image"/>
                <FooterAboutMe/>
            </Col>
        );
    }
//     }
// }

export default FooterPhoto;