import React, {Component} from 'react';
import {Grid, Row } from 'react-bootstrap';
import FooterPhoto from "./FooterComponents/FooterPhoto";
import FooterSocialMedia from "./FooterComponents/FooterSocialMedia";
import FooterCopyright from "./FooterComponents/FooterCopyrights";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: new Date().getFullYear()
        }
    }

    render () {        
        return (
            <Grid>
                <Row className="show-grid footer">
                    <FooterPhoto/>
                    <FooterSocialMedia/>
                </Row>
                <FooterCopyright year={this.state.year}/>
            </Grid>
        );
    }
}

export default Footer;