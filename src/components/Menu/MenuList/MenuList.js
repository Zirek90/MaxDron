import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


    const MenuElements = () => {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass="span" href="#home">
                            <a href="#home">Strona Główna</a>
                        </NavItem>
                        <NavItem eventKey={2} componentClass="span" href="#services">
                            <a href="#services">Usługi</a>
                        </NavItem>
                        <NavItem eventKey={3} componentClass="span" href="#gallery">
                            <a href="#gallery">Galeria</a>
                        </NavItem>
                        <NavItem eventKey={4} componentClass="span" href="#contact">
                            <a href="#contact">Kontakt</a>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }


export default MenuElements;