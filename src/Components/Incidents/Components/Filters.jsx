import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const Filters = ({ show, handleClose, startDate, handleChange, showFilters, showFiltersHandler, addFilter, applyFilters }) => {
    const DatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
        <Button onClick={onClick}>
          {value}
        </Button>
    ));
    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check defaultChecked={showFilters} onChange={showFiltersHandler} type="checkbox" label="Ver todos los incidentes" />
            </Form.Group>
            {!showFilters && <Container>
                <Row>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Fecha</label><br/>
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={startDate}
                            onChange={handleChange}
                            customInput={ <DatePickerInput />}
                        />
                    </Col>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Tipo de incidente</label><br/>
                        <select name="" id="" onChange={(e) => addFilter( 'type', e.target.value)}>
                            <option value=""></option>                            
                            <option value="robo">Robo</option>
                            <option value="Venta de drogas">Acoso</option>
                            <option value="Violencia">Violencia</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    {/* <Col md={6} style={{marginBottom: 5}}>
                        <label>Tipo de entorno</label><br/>
                        <select name="" id="" onClick={(e) => addFilter( 'environment', e.target.value)}>
                            <option value=""></option>                            
                            <option value="Robo">Robo</option>
                            <option value="Acoso">Acoso</option>
                            <option value="Violencia">Violencia</option>
                        </select>
                    </Col> */}
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Zona</label><br/>
                        <select name="" id="" onClick={(e) => addFilter( 'zone', e.target.value)}>
                            <option value=""></option>                            
                            <option value="robo">Robo</option>
                            <option value="Venta de drogas">Acoso</option>
                            <option value="Violencia">Violencia</option>
                        </select>
                    </Col>
                </Row>
            </Container>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={applyFilters}>
            Aceptar
          </Button>
        </Modal.Footer>
    </Modal>
);};

export default Filters;