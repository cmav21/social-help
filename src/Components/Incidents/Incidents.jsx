import React, { Component } from 'react';
import MapView from './Components/Map/MapView';
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import Filters from './Components/Filters';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { verTodos, datosUsuario, porFiltro, getSafeZones} from '../../Store/Actions/Filtros';
import { isNull, isUndefined } from 'util';

class Home extends Component {

    state = {
        data: [],
        startDate: new Date(),
        incidents: [],
        showModal: false,
        showFilters: true,
    }

    componentDidMount(){
        this.props.todos();
    }

    handleChange = (date) => {
        this.setState({
            startDate: date 
        })
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
        const data = this.props.newState.Filtros.payload
        console.log(this.props)
        return(
            <>
                <NavigationBar 
                    filters={true}
                    openFilters={this.handleShow}
                />
                <Container fluid={true} style={{height:'99vh', margin:0, padding:0}}>
                    <MapView incidents={!isUndefined(data) && !isNull(data) ? data : {}} />                    
                </Container>
                <Filters 
                    show={this.state.showModal} 
                    handleClose={this.handleClose}
                    startDate={this.state.startDate}
                    handleChange={this.handleChange}
                    todos={this.props.todos}
                    incidentesUsurio={()=>this.props.usuario('5DXQgtHgpwMy5bq276KghdeEbu63')}
                    porFiltro={(filters)=>this.props.filtro(filters)}
                    todasZonas={()=>this.props.allZones(this.state.incidents)}
                    filtroPorZona={(filtro)=>this.props.filtroZona(filtro,this.state.incidents)}
                    logged={this.props.newState.Usuarios.logged}
                    newState={this.props.newState}
                    safeZones={this.props.safeZones}
                />
            </> 

        )
    }
}

const mapStateToProps = state => {
    return {
        newState: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        todos: () => dispatch(verTodos()),
        usuario: usuarioId => dispatch(datosUsuario(usuarioId)),
        filtro: filters => dispatch(porFiltro(filters)),
        safeZones: () => dispatch(getSafeZones())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));