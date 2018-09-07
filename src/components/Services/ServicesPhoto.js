import React, {Component} from 'react';

import { Grid, Row } from 'react-bootstrap';

import project1 from '../../img/Project1.jpg'
import project2 from '../../img/Project2.jpg'
import project3 from '../../img/Project3.jpg'
import project4 from '../../img/Project4.jpg'
import project5 from '../../img/Project5.jpg'
import ServicesComponentsPhoto from "./ServicesComponents/ServicesComponentsPhoto";

const ServicesPhotoRow = [
    {
        photo: project1,
        title: "Zdjecia"
    },
    {
        photo: project2,
        title: "Kaczki"
    },
    {
        photo: project3,
        title: "Objecia"
    },
    {
        photo: project4,
        title: "Kadry"
    },
    {
        photo: project5,
        title: "Zwierzaczki"
    }
];

class ServicesPhoto extends Component {
    render() {
        return (
            <div>
                <h2 className="services-header">Zdjecia</h2>
                <Grid className="text-center services-container">
                    <Row className="show-grid text-center services-photo">

                        {ServicesPhotoRow.map((e, i) =>
                            <ServicesComponentsPhoto
                                photo={e.photo}
                                title={e.title}
                                key={i}/>
                        )}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ServicesPhoto;