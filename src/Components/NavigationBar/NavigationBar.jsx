import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import {NavLink, withRouter} from 'react-router-dom';
import './navigationBar.scss';
import firebase from 'firebase';
import { logout } from '../../Store/Actions/Users';

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

    logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            this.props.signout()
            this.props.history.push('/');
        });
    }

    render() {

        const height = !this.state.isTop ? "reduceHeight my-1" : "nabvar my-3"
        const opacity = !this.state.isTop ? "reduceOpacity" : "navigationBar"

        console.log(this.props);
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
                        <Navbar.Toggle className="bg-dark" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink className= "nav-link mt-2" to="/home">Home</NavLink>
                                <NavLink className="nav-link mt-2" to="/incidentes">Incidentes</NavLink>
                                <NavLink className="nav-link mt-2" to="/nosotros">Sobre nosotros</NavLink>
                                {this.props.filters && <NavLink className="nav-link mt-2 text-white" to="#" onClick={this.props.openFilters}>Filtros</NavLink> }
                                <NavLink className="nav-link mt-2" to="/simbologia">Simbologia</NavLink>
                                {
                                    !this.props.newState.Usuarios.logged ? <NavLink className="nav-link" to="/ingresar">
                                        <button className="btn loginButton">INICIAR SESIÓN<i className="ml-1 fas fa-arrow-right"></i></button>
                                    </NavLink>
                                    : <NavLink className="nav-link text-white" to="#">
                                        <button onClick={this.logoutHandler} className="btn loginButton">CERRAR SESIÓN<i className="ml-1 fas fa-arrow-right"></i></button>
                                    </NavLink>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        newState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));