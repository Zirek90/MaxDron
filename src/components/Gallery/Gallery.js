import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import ManageGallery from './GalleryComponents/manageGallery';

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            buttonText: 'Zobacz wiecej',
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

        return (
            <Grid className="text-center gallery-container">
                <h1>Nasza Galeria</h1>
                <button onClick={this.showGallery}>{this.state.buttonText}</button>
                {this.state.isShown
                    ?
                    <ManageGallery />
                    : null
                }
            </Grid>
        )
    }
}

export default Gallery;