import React from 'react';

import { Grid, Row } from 'react-bootstrap';
import ServicesComponentsPhoto from "./ServicesComponents/ServicesComponentsPhoto";

import project1 from '../../img/Project1.jpg'
import project2 from '../../img/Project2.jpg'
import project3 from '../../img/Project3.jpg'
import project4 from '../../img/Project4.jpg'
import project5 from '../../img/Project5.jpg'
import project6 from '../../img/Project6.jpg'
import project7 from '../../img/Project7.jpg'
import project8 from '../../img/Project8.jpg'

const ServicesPhotoRow = [
    {
        photo: project1,
        title: "usługi dla developerów, architektów i firm budowlanych",
        description: "Panoramy przyszłych kontygnacji || Postęp budowy || Dokumentacja budowy || Monitoring budowy"
    },
    {
        photo: project2,
        title: "obiektów na sprzedaż",
        description: "Filmy i zdjęcia sprzedażowe budynków, działek, itp."
    },
    {
        photo: project3,
        title: "otoczenia nieruchomości",
        description: "Fotografia z drona umożliwia pokazanie walorów działek oraz nieruchomości"
    },
    {
        photo: project4,
        title: "do wizualizacji",
        description: "Fotografie pod komputerową wizualizacje obiektów"
    },
    {
        photo: project5,
        title: "architektury i krajobrazów",
        description: "Fotografie na potrzeby reklam || Fotografie do prezentacji || Inne"
    },
    {
        photo: project6,
        title: "monitoringu obiektów",
        description: "Fotografie z inspekcji wszelkiego rodzajów obiektów np. z trudno dostępnych miejsc"
    },
    {
        photo: project7,
        title: "operacji specjalnych",
        description: "Relacje ze szczególnych wydarzeń"
    },
    {
        photo: project8,
        title: "wydarzeń",
        description: "Relacje z eventów"
    }
];

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