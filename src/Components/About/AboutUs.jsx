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
                <Jumbotron className="bg-light mb-0">
                    <h1>Somos social Help</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates laborum iusto et in temporibus officiis fugiat earum repudiandae quis totam assumenda perspiciatis voluptatum, tenetur ullam recusandae quos possimus blanditiis.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-light mb-0">
                    <h1>Nuestros valores</h1>
                    <hr/>
                        <ul style={{width:'100%'}}>
                            <li className="text-left">Lorem ipsum dolor sit.</li>
                            <li className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro.</li>
                            <li className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto reprehenderit adipisci obcaecati voluptate a quod aliquam perferendis dolores rem doloribus non vel, maxime blanditiis dicta? Ratione </li>
                            <li className="text-left">Lorem ipsum dolor sit amet.</li>
                            <li className="text-left">Lorem ipsum dolor, suscipit molestias exercitationem qui voluptatum ullam enim. Ut, nesciunt!</li>
                            <li className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li className="text-left">Lorem ipsum dolor sit.</li>
                        </ul>
                </Jumbotron>
                <Jumbotron className="bg-light">
                    <h1>Nuestra misión</h1>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed et quo. Consectetur voluptas distinctio iste eos ducimus facere expedita alias. Cum nisi quaerat nostrum totam maiores animi, tempore eos.
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