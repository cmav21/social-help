import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../logo.svg';

const NavigationBar = ({ openFilters, filters }) => (
    <Container fluid={true} bg="dark" className="bg-dark">
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Social Help '}
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/incidentes">Incidentes</Nav.Link>
                    <Nav.Link href="/nosotros">Sobre nosotros</Nav.Link>
                    {filters && <Nav.Link href="#" onSelect={openFilters} no>Filtros</Nav.Link> }
                    <Nav.Link href="/simbologia">Simbologia</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    </Container>
);

export default NavigationBar;