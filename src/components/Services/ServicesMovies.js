import React from 'react';

import { Grid, Row } from 'react-bootstrap';

import ServicesComponentsMovie from "./ServicesComponents/ServicesComponentsMovie";
const ServicesPhotoRow = [
    {
        video: "jUygnVNGE00",
        title: "Olivia Business Centre - Olivia Star 180m (06.2018) MaxDron"
    },
    {
        video: "JgwNAw1QkLA",
        title: "Arktyczna Gdynia 2018 4K - MaxDron"
    },
    {
        video: "NZjHgWjUU8Y",
        title: "Olivia Business Centre - Olivia Star 180m (03.2018) MaxDron"
    },
    {
        video: "0YqbS9xNPik",
        title: "Bajecznie białe Orłowo 2018 4k - MaxDron"
    },
    {
        video: "pWEexDZ2fBc",
        title: "Podsumowanie roku 2017 4K - MaxDron"
    }
];

    const ServicesMovies = () => {
        return (
            <div>
                <h2 className="services-header">Przykładowe nagrania</h2>
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


export default ServicesMovies;