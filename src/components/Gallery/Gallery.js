import React, {Component} from 'react';
import {Grid, Row } from 'react-bootstrap';
import ShowGallery from './GalleryComponents/showGallery';

import ServicesPhotoRow from '../../database/databasePhotos';


class Gallery extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            buttonText: 'Zobacz wiecej'
        }
    }

    showGallery = () => {
        this.setState({
            isShown: !this.state.isShown
        })
        if (!this.state.isShown) {
            this.setState({
                buttonText: 'Zamknij Galerie'
            })
        } else {
            this.setState({
                buttonText: 'Zobacz wiecej'
            })
        }  
    }

    render() {

        return(
            <Grid className="text-center gallery-container">
            <h1>Nasza Galeria</h1>
            <button onClick={this.showGallery}>{this.state.buttonText}</button>
            {this.state.isShown 
            ?
                <Row>
                    {ServicesPhotoRow.map((e,i) => 
                        <ShowGallery 
                        key={i}
                        photo={e.photo}/>
                    )}
                </Row>
            : null
                }
            </Grid>
        )
    }
}

export default Gallery;