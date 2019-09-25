import React, { Component } from 'react';
import firebase from 'firebase';
import Header from '../NavigationBar/NavigationBar';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Store/Actions/Users';
import './login.scss';

class Login extends Component {

    state = {
        email: '',
        password: '',
        user: ''
    }

    changeCredentialsHandler = (text, type) => {
        this.setState({ [type]: text });
    }

    authenticationHandler = async (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
            this.props.authenticateUser(user);
            this.props.history.goBack();
        })
        .catch(( err ) => {
            console.log(err);
        });

    }

    render() {
        return(
            <>
                <Header />
                <Container className="login">
                    <Row style={{display:'flex', justifyContent:'center'}}>
                        <Col sm={12} md={6} className="my-5">
                            <h1>Inicio de Sesión</h1>
                            <Form className="login">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo electronico</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>this.changeCredentialsHandler(e.target.value, 'email')} />
                                    <Form.Text className="text-muted">
                                    Tus datos no seran compartidos con nadie mas.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e)=>this.changeCredentialsHandler(e.target.value, 'password')} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={(e)=>this.authenticationHandler(e)}>
                                    Ingresar
                                </Button>
                            </Form>
                            <div className="login">
                                <small>Las credenciales a ingresas son las que fueron proporcionadas en la aplicación</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
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
        authenticateUser: ( user ) => dispatch(login(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));