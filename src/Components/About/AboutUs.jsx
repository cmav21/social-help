import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './aboutUs.scss';
import Members from './Members';

const AboutUs = () => (
    <>
    <NavigationBar />
    <Container fluid={true} className="aboutUs p-0">
        <Container>
            <Row>
                <Jumbotron className="bg-white mb-0">
                    <h1>Somos social Help</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates laborum iusto et in temporibus officiis fugiat earum repudiandae quis totam assumenda perspiciatis voluptatum, tenetur ullam recusandae quos possimus blanditiis.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-white mb-0">
                    <h1>Nuestros valores</h1>
                    <hr/>
                        <ul style={{width:'100%'}}>
                            <li className="text-left">Responsabilidad: Cumplir con los tiempos de entrega previamente acordados y cubrir los estándares de calidad.</li>
                            <li className="text-left">Respeto: Una comunic ación sana entre los miembros del equipo de trabajo y los clientes de la empresa.</li>
                            <li className="text-left">Tolerancia: Poder resolver las diferencias que pudieran existir entre los integrantes que conforman la empresa.</li>
                            <li className="text-left">Dedicación: Realizar el esfuerzo máximo en cada una de nuestras tareas.</li>
                            <li className="text-left">Los miembros del equipo de trabajo estarán estrictamente apegados a las normas de trabajo y valores establecidos por la empresa.</li>
                        </ul>
                </Jumbotron>
                <Jumbotron className="bg-white">
                    <h1>Nuestra misión</h1>
                    <hr/>
                    <p className="text-center">
                        Desarrollar software personalizado para dar solución a las posibles problemáticas de nuestros clientes y/o mejorar su trabajo.
                    </p>
                </Jumbotron>
            </Row>
                <h1>Miembros</h1>
            <Row>
                {Members()}
            </Row>
        </Container>
    </Container>    
    </>
);

export default AboutUs;