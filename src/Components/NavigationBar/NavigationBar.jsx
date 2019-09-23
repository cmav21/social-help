import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../logo.svg';
import {NavLink} from 'react-router-dom';

const NavigationBar = ({ openFilters, filters }) => (
    <Container fluid={true} bg="dark" className="bg-dark">
        <Container>
            <Navbar bg="dark"  variant="dark" expand="lg">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/incidentes">Incidentes</NavLink>
                        <NavLink className="nav-link" to="/nosotros">Sobre nosotros</NavLink>
                        {filters && <NavLink className="nav-link" to="#" onClick={openFilters}>Filtros</NavLink> }
                        <NavLink className="nav-link" to="/simbologia">Simbologia</NavLink>
                        <NavLink className="nav-link" to="/ingresar">Iniciar sesión</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </Container>
);

export default NavigationBar;