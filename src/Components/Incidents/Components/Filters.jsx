import React, {Component} from 'react';
import { Modal, Button, Container, Row, Col, Form, Card, Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { verTodos, datosUsuario, porFiltro } from '../../../Store/Actions/Filtros';
import DatePickerInput from './datepicker';

class Filters extends Component {
    
    state = {
        filter: '',
        todos: true,
        usuario: false,
        filtros: false,
        todasZonas: true,
        porFiltrosZonas: false,
        filtroZona: ''        
    }

    filtersHandler(keyTrue, keyFalse, secondKeyFalse = '') {
        this.setState({[keyFalse]: false, [keyTrue]: true, [secondKeyFalse]: false})
    }

    changeWindowHandler(window) {
        this.setState({filter: window});
    }

    showCardBody() {
        let body = '';
        if(this.state.filter === 'zone') {
            body = <Card.Body>
                <Card.Title>Seleccione el filtro para mostrar las zonas</Card.Title>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            checked={this.state.todasZonas} 
                            label="Ver todos los tipos de zona" 
                            onClick={()=>{this.props.todasZonas(); this.filtersHandler('todasZonas', 'porFiltrosZonas')}}
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            checked={this.state.porFiltrosZonas} 
                            label="Seleccionar por filtro"
                            onClick={()=>{this.filtersHandler('porFiltrosZonas', 'todasZonas')}}
                            />
                    </Form.Group>
                    {
                        this.state.porFiltrosZonas && <Row>
                            <Col>
                                <label>Tipo de zona</label><br/>
                                <select name="" id="" onChange={(e)=>{this.setState({filtroZona: e.target.value}); this.props.filtroPorZona(this.state.filtroZona)}}>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                        checked={this.state.todos}
                        type="checkbox" 
                        onClick={()=>{this.filtersHandler('todos', 'usuario', 'filtros'); this.props.todos()}} 
                        label="Ver todos los reportes"
                    />
                    </Form.Group>
                    {
                        this.props.logged && <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                checked={this.state.usuario} 
                                type="checkbox" 
                                onClick={()=>{this.filtersHandler('usuario', 'todos','filtros'); this.props.incidentesUsurio()}} 
                                label="Ver unicamente mis reportes" />
                        </Form.Group>
                    }
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            checked={this.state.filtros} 
                            type="checkbox" 
                            onClick={()=>{this.filtersHandler('filtros', 'usuario', 'todos'); this.props.porFiltro()}} 
                            label="Seleccionar filtros" />
                    </Form.Group>
                    {this.state.filtros && <><Row>
                        <Col md={6} style={{marginBottom: 5}}>
                            <label>Fecha</label><br/>
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={this.props.startDate}
                                onChange={this.props.handleChange}
                                customInput={ <DatePickerInput />}
                            />
                        </Col>
                        <Col md={6} style={{marginBottom: 5}}>
                            <label>Tipo de incidente</label><br/>
                            <select name="" id="">
                                <option value=""></option>                            
                                <option value="robo">Robo</option>
                                <option value="Venta de drogas">Acoso</option>
                                <option value="Violencia">Violencia</option>
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
                        <Nav.Item>
                            <Nav.Link href="#link" onClick={()=>this.changeWindowHandler('zone')}>Zonas</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Card.Header>
                    {this.showCardBody()}
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={()=>{console.log(this.props.Usuarios)}}>
                    Aceptar
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default (Filters);