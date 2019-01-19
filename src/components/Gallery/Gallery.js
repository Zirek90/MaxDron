import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ShowGallery from './GalleryComponents/showGallery';

import Gdynia from '../../database/gdynia'
import Sopot from '../../database/sopot'
import Gdansk from '../../database/gdansk'
import AllPhotos from '../../database/allphotos'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            buttonText: 'Zobacz wiecej',
            cityToShow: ''
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

    showGdynia = () => {
        this.setState({
            cityToShow: 'gdynia'
        })
    }
    showSopot = () => {
        this.setState({
            cityToShow: 'sopot'
        })
    }
    showGdansk = () => {
        this.setState({
            cityToShow: 'gdansk'
        })
    }
    showAll = () => {
        this.setState({
            cityToShow: 'all'
        })
    }

    render() {

        let photoContent = '';

        if (this.state.cityToShow === 'gdynia') {
            photoContent = Gdynia.map((e, i) =>
                <ShowGallery
                    key={i}
                    photo={e.photo} />)
        } else if (this.state.cityToShow === 'sopot') {
            photoContent = Sopot.map((e, i) =>
                <ShowGallery
                    key={i}
                    photo={e.photo} />)
        } else if (this.state.cityToShow === 'gdansk') {
            photoContent = Gdansk.map((e, i) =>
                <ShowGallery
                    key={i}
                    photo={e.photo} />)
        } else if (this.state.cityToShow === 'all') {
            photoContent = AllPhotos.map((e, i) =>
                <ShowGallery
                    key={i}
                    photo={e.photo} />)
        }

        return (
            <Grid className="text-center gallery-container">
                <h1>Nasza Galeria</h1>
                <button onClick={this.showGallery}>{this.state.buttonText}</button>
                {this.state.isShown
                    ?
                    <Row>
                        <div className="gallery-options">
                            <button onClick={this.showGdynia}>Gdynia</button>
                            <button onClick={this.showSopot}>Sopot</button>
                            <button onClick={this.showGdansk}>Gdańsk</button>
                            <button onClick={this.showAll}>Wszystkie</button>
                        </div>
                        {photoContent}

                        {/* {ServicesPhotoRow.map((e,i) => 
                        <ShowGallery 
                        key={i}
                        photo={e.photo}/>
                    )} */}
                    </Row>
                    : null
                }
            </Grid>
        )
    }
}

export default Gallery;