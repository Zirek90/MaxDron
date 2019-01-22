import React, {Component} from 'react';
import {Col, Image, Modal } from 'react-bootstrap';


class ShowGallery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            imageStatus: true
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleImageLoad = this.handleImageLoad.bind(this);
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    

    handleImageLoad() {
            this.setState({
                imageStatus: false
            })
    }

    componentDidMount() {
        this.handleImageLoad();
    }


    render() {
        return(
            <Col xs={12} sm={6} md={6} lg={4} className="show-gallery">
            {!this.state.imageStatus 
            ?
            <div>
                <Image src={this.props.photo} onLoad={this.handleImageLoad} responsive bsStyle="primary"
                    onClick={this.handleShow}/>
                <Modal show={this.state.show} onHide={this.handleClose} className="gallery-modal">
                    <Modal.Body>
                        <Image src={this.props.photo} rounded responsive/>
                    </Modal.Body>
                </Modal>
                </div>
                :
                <div>Im loading</div>
                }
            </Col>
        )
    }
}

export default ShowGallery;