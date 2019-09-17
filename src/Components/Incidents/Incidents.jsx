import React, { Component } from 'react';
import MapView from './Components/Map/MapView';
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import Filters from './Components/Filters';
import { withRouter } from 'react-router-dom';
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
                <NavigationBar 
                    filters={true}
                    openFilters={this.handleShow}
                />
                <Container fluid={true} style={{height:'90.8vh', margin:0, padding:0}}>
                    <MapView incidents={this.state.incidents}/>                    
                </Container>
                <Filters 
                    show={this.state.showModal} 
                    handleClose={this.handleClose}
                    startDate={this.state.startDate}
                    handleChange={this.state.handleChange}
                />
            </> 

        )
    }
}

export default withRouter(Home);