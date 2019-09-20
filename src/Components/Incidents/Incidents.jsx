import React, { Component } from 'react';
import MapView from './Components/Map/MapView';
import "react-datepicker/dist/react-datepicker.css";
import firebase, { app } from 'firebase';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import Filters from './Components/Filters';
import { withRouter } from 'react-router-dom';
import { isFunctionDeclaration } from '@babel/types';
class Home extends Component {

    state = {
        class: '',
        data: [],
        startDate: new Date(),
        incidents: [],
        usuarios: [],
        showModal: false,
        email:'',
        password:'',
        showFilters: true,
        appliedFilters: {}
    }

    showFiltersHandler = () => {
        this.setState({
            showFilters: !this.state.showFilters
        });
    }

    applyFilters = () => {
        const incidents = {...this.state.incidents};
        const filters = this.state.appliedFilters;
        if(!this.state.showFilters) {
            const result = Object.keys(incidents).filter((element, i ) => {
                for (const key in filters) {
                    if(incidents[element][key] === filters[key]){
                        return element;
                    }
                }
            });
            const newIncidents = result.map((element,i) => incidents[element]);
            this.setState({
                data: newIncidents
            });
        } else {
            this.setState({
                data: incidents
            });
        }
    }

    addFilterHandler = (filter, value) => {
        let filters = {...this.state.appliedFilters};
        filters[filter] = value;
        this.setState({
            appliedFilters: filters 
        });
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
                incidents: data,
                data
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

    render(){
        return(
            <>
                <NavigationBar 
                    filters={true}
                    openFilters={this.handleShow}
                />
                <Container fluid={true} style={{height:'90.8vh', margin:0, padding:0}}>
                    <MapView incidents={this.state.data}/>                    
                </Container>
                <Filters 
                    show={this.state.showModal} 
                    handleClose={this.handleClose}
                    startDate={this.state.startDate}
                    handleChange={this.state.handleChange}
                    showFiltersHandler={this.showFiltersHandler}
                    showFilters={this.state.showFilters}
                    addFilter={this.addFilterHandler}
                    applyFilters={this.applyFilters}
                />
            </> 

        )
    }
}

export default withRouter(Home);