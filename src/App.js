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

import pricePhoto from './img/photo.png';
import priceVideo from './img/video.png';
import Gallery from './components/Gallery/Gallery';

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
                                    <h3>Pakiet zdjęć już</h3>
                                    <h3>od 200 zł</h3>
                                </div>
                                <div className="pricelistVideo">
                                    <Image src={priceVideo} alt="photo icon"></Image>
                                    <h3>Materiał filmowy w jakości 4k już</h3>
                                    <h3>od 250 zł</h3>
                                </div>
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

                    <div id="gallery">
                        <Gallery />
                    </div>

                </div>
                <div className="footer-container" id="contact">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
