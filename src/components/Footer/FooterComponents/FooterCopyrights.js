import React from 'react';
import { Row, Col} from 'react-bootstrap';

    const FooterCopyright = (props) => {
        return (
            <Row className="show-grid footer">
                <Col xs={12} sm={12} className="footer-copyrights">
                    <span>&copy; {props.year} Michał Renka - MaxDron All Rights Reserved.</span>
                    <span>Designed and implemented <a href="https://mateusz-grzymowicz.herokuapp.com/">Mateusz Grzymowicz</a></span>
                </Col>
            </Row>
        );
    }


export default FooterCopyright;

