import React from 'react';

import { Grid, Row } from 'react-bootstrap';
import ServicesComponentsPhoto from "./ServicesComponents/ServicesComponentsPhoto";
import ServicesPhotoRow from '../../database/databasePhotos';

    const ServicesPhoto = () => {
        return (
            <div>
                <h2 className="services-header">Filmy i zdjęcia</h2>
                <Grid className="text-center services-container">
                    <Row className="show-grid text-center services-photo">

                        {ServicesPhotoRow.map((e, i) =>
                            <ServicesComponentsPhoto
                                photo={e.photo}
                                title={e.title}
                                description={e.description}
                                key={i}/>
                        )}
                    </Row>
                </Grid>
            </div>
        );
    }


export default ServicesPhoto;