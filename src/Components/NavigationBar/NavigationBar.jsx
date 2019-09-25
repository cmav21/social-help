import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../logo.svg';
import {NavLink} from 'react-router-dom';
import './navigationBar.scss';

class NavigationBar extends Component {

    state = {
        isTop: true
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 110;
            if(isTop !== this.state.isTop) {
                this.setState({
                    isTop
                });
            }
        })
    }

    render() {

        const height = !this.state.isTop ? "reduceHeight" : "nabvar"
        const opacity = !this.state.isTop ? "reduceOpacity" : "navigationBar"


        return (
            <Container fluid={true} className={`${opacity} fixed-top`}>
                <Container className="navigationBar">
                    <Navbar className={`${height}`} expand="lg">
                        <Navbar.Brand className="text-white logo" href="/">
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
                            <NavLink className= "nav-link mt-2" to="/home">Home</NavLink>
                            <NavLink className="nav-link mt-2" to="/incidentes">Incidentes</NavLink>
                            <NavLink className="nav-link mt-2" to="/nosotros">Sobre nosotros</NavLink>
                            {this.props.filters && <NavLink className="nav-link mt-2 text-white" to="#" onClick={this.props.openFilters}>Filtros</NavLink> }
                            <NavLink className="nav-link mt-2" to="/simbologia">Simbologia</NavLink>
                            <NavLink className="nav-link" to="/ingresar">
                                <button className="btn loginButton">INICIAR SESIÓN <i className="ml-1 fas fa-arrow-right"></i></button>
                            </NavLink>
                        </Nav>
                    </Navbar>
                </Container>
            </Container>
        );
    }
}

export default NavigationBar;