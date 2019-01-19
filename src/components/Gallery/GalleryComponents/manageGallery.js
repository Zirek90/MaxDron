import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ShowGallery from './subcomponent/showGallery';

import Gdynia from '../../../database/gdynia';
import Sopot from '../../../database/sopot'
import Gdansk from '../../../database/gdansk'
import AllPhotos from '../../../database/allphotos'

class ManageGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityToShow: ''
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
            <Row>
                <div className="gallery-options">
                    <button onClick={this.showGdynia}>Gdynia</button>
                    <button onClick={this.showSopot}>Sopot</button>
                    <button onClick={this.showGdansk}>Gdańsk</button>
                    <button onClick={this.showAll}>Wszystkie</button>
                </div>
                {photoContent}
            </Row>
        )
    }
}

export default ManageGallery;