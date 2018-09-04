import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';



class MenuElements extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass="span">
                            <a href="#">Home</a>
                        </NavItem>
                        <NavItem eventKey={2} componentClass="span">

                            <a href="#"> Services</a>
                        </NavItem>
                        <NavItem eventKey={3} componentClass="span">

                            <a href="#"> About Me</a>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MenuElements;