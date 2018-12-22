import React from 'react';
import {Grid, Row } from 'react-bootstrap';
import FooterPhoto from "./FooterComponents/FooterPhoto";
import FooterSocialMedia from "./FooterComponents/FooterSocialMedia";
import FooterCopyright from "./FooterComponents/FooterCopyrights";

    const Footer = () => {
        return (
            <Grid>
                <Row className="show-grid footer">
                    <FooterPhoto/>
                    <FooterSocialMedia/>
                </Row>
                <FooterCopyright/>
            </Grid>
        );
    }

export default Footer;