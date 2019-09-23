import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';

const Filters = (props) => {
    const DatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
        <Button onClick={onClick}>
          {value}
        </Button>
    ));

    return (<Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check defaultChecked={props.showFilters} onChange={props.showFiltersHandler} type="checkbox" label="Ver todos los incidentes" />
                {
                    props.newState.Usuarios.logged && <Form.Check defaultChecked={props.showUserData} onChange={props.userData} type="checkbox" label="Mostrar mis incidentes" />
                }
            </Form.Group>
            {!props.showFilters && <Container>
                <Row>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Fecha</label><br/>
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={props.startDate}
                            onChange={props.handleChange}
                            customInput={ <DatePickerInput />}
                        />
                    </Col>
                    <Col md={6} style={{marginBottom: 5}}>
                        <label>Tipo de incidente</label><br/>
                        <select name="" id="" onChange={(e) => props.addFilter( 'type', e.target.value)}>
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
                        <select name="" id="" onClick={(e) => props.addFilter( 'zone', e.target.value)}>
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
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={props.applyFilters}>
            Aceptar
          </Button>
        </Modal.Footer>
    </Modal>
);};

const mapStateToProps = state => {
    return {
        newState: state
    }
}

export default connect(mapStateToProps)(Filters);