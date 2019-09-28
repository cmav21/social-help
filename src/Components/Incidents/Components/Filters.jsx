import React, {Component} from 'react';
import { InputGroup, FormControl, Modal, Button, Container, Row, Col, Form, Card, Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { verTodos, datosUsuario, porFiltro } from '../../../Store/Actions/Filtros';
import DatePickerInput from './datepicker';

class Filters extends Component {
    
    state = {
        filters: { date: this.parseDateHandler(this.props.startDate)},
        showFilters: false,
    }

    parseDateHandler (date) { 
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
 
    addFiltersHandler = (filter, value) => {
        const filters = {...this.state.filters};
        filters[filter] = value;
        this.setState({filters});
    }

    changeWindowHandler = window => {
        this.setState({filter: window});
    }

    showCardBody = () => {
        let body = '';
        if(this.state.filter === 'zone') {
            body = <Card.Body>
                <Card.Title>Seleccione el filtro para mostrar las zonas</Card.Title>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            label="Ver todos los tipos de zona" 
                            onClick={this.props.todasZonas}
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            checked={this.state.porFiltrosZonas} 
                            label="Seleccionar por filtro"
                        />
                    </Form.Group>
                    {
                        this.state.porFiltrosZonas && <Row>
                            <Col>
                                <label>Tipo de zona</label><br/>
                                <select name="" id="">
                                    <option value=""></option>                            
                                    <option value="seguro">Segura</option>
                                    <option value="riesgoMedio">riesgo medio</option>
                                    <option value="peligroso">peligrosa</option>
                                </select>
                            </Col>
                        </Row>
                    }
                </Card.Body>
        } else {
            body = <Card.Body>
            <Card.Title>Seleccione el filtro para mostrar los incidentes</Card.Title>
                <Container className="m-0 p-0">
                        <Form.Group as={Row}>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Ver todos los reportes"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onClick={()=>{
                                        this.props.todos();
                                        this.setState({ showFilters: false })
                                    }}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Mostrar zonas seguras"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onClick={()=>{
                                        this.props.safeZones();
                                        this.setState({ showFilters: false })                                        
                                    }}
                                />
                                {
                                    this.props.logged && <Form.Check
                                        type="radio"
                                        label="Ver unicamente mis reportes"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        onClick={()=>{
                                            this.props.incidentesUsurio();
                                            this.setState({ showFilters: false })
                                        }}
                                    />
                                }
                                <Form.Check
                                    type="radio"
                                    label="Seleccionar filtros"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onClick={()=>this.setState({ showFilters: !this.state.showFilters })}
                                />
                            </Col>
                        </Form.Group>
                        {this.state.showFilters && <><Row>
                            <Col md={6} style={{marginBottom: 5}}>
                                <label>Fecha</label><br/>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={this.props.startDate}
                                    onChange={date => {
                                        this.props.handleChange(date);
                                        this.addFiltersHandler('date', this.parseDateHandler(date))
                                    }}
                                    customInput={ <DatePickerInput />}
                                />
                            </Col>
                            <Col md={6} style={{marginBottom: 5}}>
                                <label>Tipo de incidente</label><br/>
                                <select onChange={(e)=>this.addFiltersHandler('type', e.target.value)}>
                                    <option value=""></option>                            
                                    <option value="robo">Robo</option>
                                    <option value="ventaDeDrogas">Acoso</option>
                                    <option value="violencia">Violencia</option>
                                </select>
                            </Col>
                            <Col md={6} style={{marginBottom: 5}}>
                                <label>Tipo de entorno</label><br/>
                                <select onChange={(e)=>this.addFiltersHandler('environment', e.target.value)}>
                                    <option value=""></option>                            
                                    <option value="pocaIluminacion">poca iluminacion</option>
                                    <option value="ventaDeDrogas">Acoso</option>
                                    <option value="violencia">Violencia</option>
                                </select>
                            </Col>
                        </Row>
                    </>}
                </Container>
            </Card.Body>
        }
        return body;
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Filtros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first" onClick={()=>this.changeWindowHandler('incidents')}>Incidentes</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="#link" onClick={()=>this.changeWindowHandler('zone')}>Zonas</Nav.Link>
                        </Nav.Item> */}
                        </Nav>
                    </Card.Header>
                    {this.showCardBody()}
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={()=>{
                        this.state.showFilters && this.props.porFiltro(this.state.filters);
                        this.props.handleClose();
                }}>
                        Aceptar
                 </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default (Filters);