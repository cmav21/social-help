import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';

const Symbology = () => {

    const data = {
        thief: 'Referente a un robo en la zona indicada',
        bully: 'Referente a cualquier tipo de acoso',
        violence: 'Violencia o disturbios en la zonas',
        safe: 'Zona segura',
        almostDanger: 'Sona con una cantidad de incidentes media',
        danger: 'Zona peligrosa',
    };

    const renderSymbols = () => {
        return Object.keys(data).map((type, i) => {
            return <Row key={i}>
                <Col>
                    <ul>
                        <li>
                            <img src={require(`../../assets/${type}.png`)} alt=""/>
                            <label>{data[type]}</label>
                        </li>                    
                    </ul>
                </Col>
            </Row>
        });
    } 

    return(
        <>
            <NavigationBar />
            <Container style={{marginTop:10}}>
                <Row>
                    <Col>
                        <h1>Lista de simbolos</h1>
                    </Col>
                </Row>
                {renderSymbols()}
            </Container>
        </>
    );
}

export default Symbology