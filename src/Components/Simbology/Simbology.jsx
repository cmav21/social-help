import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Symbol from './Symbol';
import './simbology.scss';
import Thief from '../../assets/thief.png'
import Violence from '../../assets/violence.png'
import AlmostDanger from '../../assets/almostDanger.png'
import Safe from '../../assets/safe.png'
import Danger from '../../assets/danger.png'
import Bully from '../../assets/bully.png'


const Symbology = () => {

    const data = [
        {
            text: 'Referente a un robo en la zona indicada',
            image: Thief
        },
        {
            text: 'Referente a cualquier tipo de acoso',
            image: Bully
        },
        {
            text: 'Violencia o disturbios en las zonas',
            image: Violence
        },
        {
            text: 'Zona segura',
            image: Safe
        },
        {
            text: 'Zona con una cantidad de incidentes media',
            image: AlmostDanger
        },
        {
            text: 'Zona peligrosa',
            image: Danger
        }

    ]

    const renderSymbols = () => (
        data.map(({text, image}, i) => (
            <Col xs={12} md={4} className="mb-4">
                <Symbol image={image} text={text} />
            </Col>
        ))
    ) 

    return(
        <>
            <NavigationBar />
            <Container className="symbology">
                <Row>
                    <Col>
                        <h1>Lista de simbolos</h1>
                    </Col>
                </Row>
                <Row className="symbols">
                    {renderSymbols()}
                </Row>
            </Container>
        </>
    );
}

export default Symbology