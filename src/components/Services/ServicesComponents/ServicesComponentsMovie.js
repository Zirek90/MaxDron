import React from 'react';
import { Col } from 'react-bootstrap';
import Youtube from 'react-youtube'

// class ServicesComponentsMovie extends Component {
//     render() {
    const ServicesComponentsMovie = (props) => {
        return (
            <Col xs={9} sm={6} className="services-columns">
                <h3>{props.title}</h3>
                <Youtube videoId={props.video}/>
            </Col>
        );
    }
//     }
// }

export default ServicesComponentsMovie;