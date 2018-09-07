import React, {Component} from 'react';
import {Grid, Row } from 'react-bootstrap';
import FooterPhoto from "./FooterComponents/FooterPhoto";
import FooterSocialMedia from "./FooterComponents/FooterSocialMedia";
import FooterCopyright from "./FooterComponents/FooterCopyrights";



class Footer extends Component {
    render() {
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
}

export default Footer;