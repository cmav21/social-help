import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const Filters = ({ show, handleClose, startDate, handleChange }) => {
    const DatePickerInput = ({ value, onClick }) => (
        <Button onClick={onClick}>
          {value}
        </Button>
    );
    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Fecha</label><br/>
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={startDate}
                            onChange={handleChange}
                            customInput={<DatePickerInput />}
                        />
                    </Col>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Tipo de incidente</label><br/>
                        <select name="" id="">
                            <option value="">Robo</option>
                            <option value="">Acoso</option>
                            <option value="">Violencia</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Tipo de entorno</label><br/>
                        <select name="" id="">
                            <option value="">Robo</option>
                            <option value="">Acoso</option>
                            <option value="">Violencia</option>
                        </select>
                    </Col>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Zona</label><br/>
                        <select name="" id="">
                            <option value="">Robo</option>
                            <option value="">Acoso</option>
                            <option value="">Violencia</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
    </Modal>
);};

export default Filters;