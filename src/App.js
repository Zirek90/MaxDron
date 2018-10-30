import React, {Component} from 'react';

import {Jumbotron} from 'react-bootstrap';
import {Parallax} from 'react-parallax';

import Header from "./components/Header/Header";
import ServicesPhoto from "./components/Services/ServicesPhoto";
import ServicesMovies from "./components/Services/ServicesMovies";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import transition1 from './img/transition1.jpg';
import headerPhoto from './img/header.jpg';
import parallaxBtn from "./img/gallery.png";

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
                            <div className="parallax-wrapper">
                                <h2>Nasza galeria</h2>
                                <button>
                                    <a href="https://www.facebook.com/pg/maxdron90/photos/?ref=page_internal">
                                        <img src={parallaxBtn} alt="parallaxBtn"/>
                                    </a>
                                </button>
                                <h2>Nasz cennik</h2>
                                <h3>Fotografie zaczynają się od 100zł</h3>
                                <h3>Filmy zaczynają się od 150zł</h3>
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
