import React, {Component} from 'react';

import {Jumbotron, Image } from 'react-bootstrap';
import {Parallax} from 'react-parallax';

import Header from "./components/Header/Header";
import ServicesPhoto from "./components/Services/ServicesPhoto";
import ServicesMovies from "./components/Services/ServicesMovies";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import transition1 from './img/transition1.jpg';
import headerPhoto from './img/header.jpg';
import parallaxBtn from "./img/gallery.png";

import pricePhoto from './img/photo.png';
import priceVideo from './img/video.png';

class App extends Component {
    render() {
        return (
            <div>
                <div id="home">
                    <Menu/>
                    <Header/>
                </div>
                <div>
                    <Jumbotron id="services">
                        <h1>Nasze usługi</h1>
                        <h3>
                            Do każdego zlecenia podchodzimy indywidualnie, aby zapewnić Państwu najwyższej jakości
                            usługi.
                        </h3>
                    </Jumbotron>
                    <ServicesPhoto/>


                    <Parallax
                        bgImage={transition1}
                        bgImageAlt="backgroundImage"
                        strength={300}
                    >
                        <div className="parallax">
                            <div className="pricelistContainer">
                                <div className="pricelistPhoto">
                                    <Image src={pricePhoto} alt="photo icon"></Image>
                                    <h3>Nasz zdjecia zaczynaja sie od</h3>
                                </div>
                                <div className="pricelistVideo">
                                    <Image src={priceVideo} alt="photo icon"></Image>
                                    <h3>Nasz filmy zaczynaja sie od</h3>
                                </div>
                            </div>
                            <div className="parallax-wrapper">
                                <h2>Nasza galeria</h2>
                                <button>
                                    <a href="https://www.facebook.com/pg/maxdron90/photos/?ref=page_internal">
                                        <img src={parallaxBtn} alt="parallaxBtn"/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </Parallax>

                    <ServicesMovies/>

                    <Parallax
                        bgImage={headerPhoto}
                        bgImageAlt="backgroundImage"
                        strength={300}
                    >
                        <div style={{height: "400px"}}/>

                    </Parallax>
                </div>
                <div className="footer-container" id="contact">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
