import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import Youtube from 'react-youtube'

class ServicesComponentsMovie extends Component {
    render() {
        return (
            <Col xs={9} sm={6} className="services-columns">
                <h3>{this.props.title}</h3>
                <Youtube videoId={this.props.video}/>
            </Col>
        );
    }
}

export default ServicesComponentsMovie;