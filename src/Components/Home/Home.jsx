import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Members from '../About/Members';
import Footer from './Components/Footer';
import './home.scss';

const Home = () => (
        <div className="container-fluid m-0 p-0">
            <NavigationBar />
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Conoce Social Help</h1>
                                <p>Red de contactos segura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Jumbotron className="description">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1>¿Que es Social Help?</h1>
                            <p>
                                Social Help es una aplicacion que almacena una red de contactos seguros, los cuales, en caso de una emergencia
                                puden ser notificados de la condicion actual en la que se encuentra la persona afectada por medio de un boton 
                                de panico
                            </p>
                        </Col>
                        <Col md={6}>
                            <img src="https://pngimage.net/wp-content/uploads/2018/06/personas-unidas-png-4.png" width="100%" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <h1>Miembros</h1>
                <Row>
                    {Members()}
                </Row>
            </Container>
            <Footer />
        </div>
)

export default (Home);