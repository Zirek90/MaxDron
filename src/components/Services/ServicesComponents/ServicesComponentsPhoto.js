import React, {Component} from 'react';
import {Col, Image, Modal } from 'react-bootstrap';

class ServicesComponentsPhoto extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }


    render() {
        return (
            <Col xs={6} sm={6} className="services-columns">
                <h3>{this.props.title}</h3>
                <Image src={this.props.photo} rounded responsive className="services-pic" bsStyle="primary"
                       bsSize="large" onClick={this.handleShow}/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h3>{this.props.title}</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.props.photo} rounded responsive className="services-pic"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <p>{this.props.description}</p>
                    </Modal.Footer>
                </Modal>
            </Col>

        );
    }
}

export default ServicesComponentsPhoto;