import React, { Component } from 'react';
import MapView from './Components/MapView';
import DatePicker from 'react-datepicker';
import './Home.scss'
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import {Modal, Button, Form} from 'react-bootstrap';


class Home extends Component {

    state = {
        class: '',
        startDate: new Date(),
        incidents: [],
        usuarios: [],
        showModal: false,
        email:'',
        password:''
    }

    emailHandler = e => {
        this.setState({
            email: e.target.value
        })
    }

    passwordHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    componentDidMount(){    
        firebase.database().ref('incidents').on('value', (snapshot)=> {
            let data = snapshot.val();
            this.setState({
                incidents: data
            })
        });
    }

    handleChange = (date) => {
        this.setState({
            startDate: date 
        })
    }

    toogleClass = () => {
        if(this.state.class === '') {
            this.setState({
                class: 'navToggle'
            });
        } else {
            this.setState({
                class: ''
            });
        }
    }

    handleShow = () => {
        this.setState({
            showModal: true
        });
    }

    handleClose = () => {
        this.setState({
            showModal: false
        });
    }

    signInConnection = () => {
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    }

    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <button className="openNav" onClick={this.toogleClass}><i className="fas fa-bars"></i></button>
                            <nav>
                                <a href="#">About us</a>
                            </nav>
                            <div className={`sideBar ${this.state.class}`}>
                                <ul>
                                    <li><span>Filtros</span></li>
                                    <li> 
                                        <DatePicker
                                            dateFormat="yyyy/MM/dd"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <span>Zona</span>
                                        <select name="aon" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </li>
                                    <li>
                                        <span>Tipo</span>
                                        <select name="aon" id="">
                                            <option value="">Robo</option>
                                            <option value="">Vandalismo</option>
                                            <option value="">Violencia</option>
                                        </select>
                                    </li>
                                    <li>
                                        <span>Mis reportes</span>
                                        <Button variant="outline-info" onClick={this.handleShow}>Iniciar Sesion</Button>
                                        <Modal show={this.state.showModal} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Iniciar Sesión</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Correo electronico</Form.Label>
                                                        <Form.Control type="email" placeholder="Correo electronico" onChange={this.emailHandler} />
                                                        <Form.Text className="text-muted">
                                                        </Form.Text>
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Contraseña</Form.Label>
                                                        <Form.Control type="password" placeholder="Constraseña" onChange={this.passwordHandler}/>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit" onClick={this.signInConnection}>
                                                        Aceptar
                                                    </Button>
                                                </Form>
                                            </Modal.Body>
                                        </Modal>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{height:'100vh'}}>
                            <MapView incidents={this.state.incidents}/>
                    </div>
                </div>
            </> 

        )
    }
}

export default Home;