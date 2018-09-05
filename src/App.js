import React, {Component} from 'react';

import {Jumbotron} from 'react-bootstrap';
import {Parallax} from 'react-parallax';

import transition from './img/przejscie1.jpg';

import Header from "./components/Header/Header";
import ServicesPhoto from "./components/Services/ServicesPhoto";
import ServicesMovies from "./components/Services/ServicesMovies";
import Menu from "./components/Menu/Menu";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Menu/>
                    <Header/>
                </div>
                <div>
                    <Jumbotron>
                        <h1>Moje usługi</h1>
                    </Jumbotron>
                    <ServicesPhoto/>

                    <Parallax
                        bgImage={transition}
                        bgImageAlt="the cat"
                        strength={200}
                    >
                        <div className="parallax">
                            <div className="parallax-wrapper">
                                <h2>Jeśli szukasz profesjonalnych zdjęć badź filmów, skontakuj się ze mną</h2>

                                <button>
                                    <a
                                        href="https://www.facebook.com/maxdron90/?fb_dtsg_ag=AdwLCdYxnqujM6oosS0Yl5QKZj5hFQaecDKN4kY6pVjHsA%3AAdxQwiqbOm_GDheLA1zBvLUHJw-j8Ye20aEhTXNx3mu4sg">Mój
                                        facebook
                                    </a>
                                </button>
                            </div>
                        </div>

                    </Parallax>

                    <ServicesMovies/>
                </div>
            </div>
        );
    }
}

export default App;
