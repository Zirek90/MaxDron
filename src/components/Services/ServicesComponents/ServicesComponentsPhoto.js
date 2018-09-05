import React, {Component} from 'react';
import { Col, Image} from 'react-bootstrap';



class ServicesComponentsPhoto extends Component {
    render() {
        return (
            <Col xs={6} sm={6} className="services-columns">
                <h3>{this.props.title}</h3>
                <Image src={this.props.photo} rounded responsive className="services-pic"/>
            </Col>
        );
    }
}

export default ServicesComponentsPhoto;