import React, { Component } from 'react';
import MapView from './Components/Map/MapView';
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import Filters from './Components/Filters';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { verTodos, datosUsuario, porFiltro, todasZonas, zonaPorFiltro } from '../../Store/Actions/Filtros';

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
        appliedFilters: {},
        showUserData: false
    }

    applyFilters = () => {
        const incidents = {...this.state.incidents};
        const filters = this.state.appliedFilters;
        if(!this.state.showFilters) {
            const result = Object.keys(incidents).filter((element) => {
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

    showUserDataHandler = () => {
        const showData = !this.state.showUserData; 
        if(showData) {
            const incidents = {...this.state.incidents};
            const dataUsuario = Object.keys(incidents).filter(element =>  incidents[element].usuarioId === '5DXQgtHgpwMy5bq276KghdeEbu63')
            const filterByUser = dataUsuario.map((element,i) => incidents[element]);
            this.setState({
                data: filterByUser,
                showUserData: showData
            });
        } else {
            this.setState({
                data: this.state.incidents,
                showUserData: showData
            });
        }
    }

    componentDidMount(){
        firebase.database().ref('incidents').on('value', (snapshot)=> {
            let data = snapshot.val();
            if(this.props.newState.Usuarios.logged) {
                const dataUsuario = Object.keys(data).filter(element =>  data[element].usuarioId === '5DXQgtHgpwMy5bq276KghdeEbu63')
                const filterByUser = dataUsuario.map((element,i) => data[element]);
                this.setState({
                    incidents: data,
                    data
                });
            } else {
                this.setState({
                    incidents: data,
                    data
                });
            }
        });
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

    applyFilters(filter) {
        this.props.dataFiltered(filter, this.state.incidents, this.state.appliedFilters);
    }

    render(){
        return(
            <>
            {
                console.log(this.props)
            }
                <NavigationBar 
                    filters={true}
                    openFilters={this.handleShow}
                />
                <Container fluid={true} style={{height:'99vh', margin:0, padding:0}}>
                    <MapView incidents={this.state.data}/>                    
                </Container>
                <Filters 
                    show={this.state.showModal} 
                    handleClose={this.handleClose}
                    startDate={this.state.startDate}
                    handleChange={this.state.handleChange}
                    todos={()=>this.props.todos(this.state.incidents)}
                    incidentesUsurio={()=>this.props.usuario(this.state.incidents)}
                    porFiltro={()=>this.props.filtro(this.state.incidents)}
                    todasZonas={()=>this.props.allZones(this.state.incidents)}
                    filtroPorZona={(filtro)=>this.props.filtroZona(filtro,this.state.incidents)}
                    logged={this.props.newState.Usuarios.logged}
                    aplicarFiltros={(filtro)=>this.applyFilters(filtro)}
                />
                {console.log(this.props)}
            </> 

        )
    }
}

const mapStateToProps = state => {
    return {
        newState: state,
        dataFiltered: (filter, data, filters = null) => filterData(filter,data, filters)
    }
}

const filterData = (filter, data, filters) => {
    switch (filter) {
        case 'DATOS_USUARIO':
                const dataUsuario = Object.keys(data).filter(element =>  data[element].usuarioId === '5DXQgtHgpwMy5bq276KghdeEbu63')
                const filterByUser = dataUsuario.map((element,i) => data[element]);
                return filterByUser;
            break;
        case 'VER_TODOS':
            return data;
        break;
        // case 'POR_FILTRO':
            
        //     break;
        // case 'FILTRO_ZONA':
            
        //     break;
        case 'TODAS_ZONAS':
            return data;
            break;
        default:
            return data;
        break;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        todos: (data) => dispatch(verTodos(data)),
        usuario: (data) => dispatch(datosUsuario(data)),
        filtro: (data) => dispatch(porFiltro(data)),
        allZones: (data) => dispatch(todasZonas(data)),
        filtroZona: (filtro,data) => dispatch(zonaPorFiltro(filtro,data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));