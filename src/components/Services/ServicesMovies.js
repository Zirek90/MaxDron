import React, {Component} from 'react';

import { Grid, Row } from 'react-bootstrap';



import ServicesComponentsMovie from "./ServicesComponents/ServicesComponentsMovie";
const ServicesPhotoRow = [
    {
        video: "pWEexDZ2fBc",
        title: "Zdjecia"
    },
    {
        video: "PGx7YYrOrwk",
        title: "Kaczki"
    },
    {
        video: "jUygnVNGE00",
        title: "Objecia"
    },
    {
        video: "vf-BrRy5_Hs",
        title: "Kadry"
    },
    {
        video: "JgwNAw1QkLA",
        title: "Zwierzaczki"
    }
];

class ServicesMovies extends Component {
    render() {
        return (
            <div>
                <h2 className="services-header">Filmy</h2>
                <Grid className="text-center services-container">
                    <Row className="show-grid text-center services-movie">

                        {ServicesPhotoRow.map((e, i) =>
                            <ServicesComponentsMovie
                                video={e.video}
                                title={e.title}
                                key={i}/>
                        )}
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default ServicesMovies;