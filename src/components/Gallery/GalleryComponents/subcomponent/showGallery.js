import React, {Component} from 'react';
import {Col, Image, Modal } from 'react-bootstrap';


class ShowGallery extends Component{
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
        return(
            <Col xs={6} sm={4} className="show-gallery">
                <h3>{this.props.title}</h3>
                <Image src={this.props.photo} responsive bsStyle="primary"
                    onClick={this.handleShow}/>
                <Modal show={this.state.show} onHide={this.handleClose} className="gallery-modal">
                    <Modal.Body>
                        <Image src={this.props.photo} rounded responsive className=""/>
                    </Modal.Body>
                </Modal>
            </Col>
        )
    }
}

export default ShowGallery;