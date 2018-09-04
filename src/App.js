import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

import transition from './img/przejscie.jpg';

import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import ServicesPhoto from "./components/Services/ServicesPhoto";
import ServicesMovies from "./components/Services/ServicesMovies";

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
                        Put some text content here
                        or even an empty div with fixed dimensions
                        to have a height for the parallax.
                        <div style={{ height: '400px' }} />
                    </Parallax>

                    <ServicesMovies/>
                </div>
            </div>
        );
    }
}

export default App;
