import React from 'react';

import { Grid, Row } from 'react-bootstrap';

import ServicesComponentsMovie from "./ServicesComponents/ServicesComponentsMovie";
import ServicesMovieRow from '../../database/databaseMovies';

    const ServicesMovies = () => {
        return (
            <div>
                <h2 className="services-header">Przykładowe nagrania</h2>
                <Grid className="text-center services-container">
                    <Row className="show-grid text-center services-movie">

                        {ServicesMovieRow.map((e, i) =>
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