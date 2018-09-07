import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';


class FooterCopyright extends Component {
    render() {
        return (
            <Row className="show-grid footer footer-copyright">
                <Col xs={12} sm={12} className="footer-copyrights">
                    <span>&copy; 2018 Michał Renka - Max-Dron All Rights Reserved.</span>
                    <span>Designed and implemented <a href="https://zirek90.github.io/Mateusz-Grzymowicz-Portfolio/">Mateusz Grzymowicz</a></span>
                </Col>
            </Row>
        );
    }
}

export default FooterCopyright;

