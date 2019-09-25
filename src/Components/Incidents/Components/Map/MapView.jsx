import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import DescriptionCard from './Components/DescripcionCard';

class MapView extends Component {

    state = {
        showModal: false,
        selectedIncident: ''
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

    renderMarkers = () => {
        const incidents = this.props.incidents;

        return Object.keys(incidents).map((incident, i) => {
            return <Marker key={incident} anchor={[incidents[incident].latitude, incidents[incident].longitude]} payload={1} onClick={()=>this.saveIncidentHandler(this.props.incidents[incident])} />
        });

    }

    saveIncidentHandler = (selectedIncident) => {
        this.setState({
            selectedIncident
        })
        this.handleShow();
    }

    renderBodyContent = () => {
        const incident = {...this.state.selectedIncident};
        const data = { 
            'Ciudad': incident.city ? incident.city : 'Sin informacion' ,
            'Fecha': incident.date ? incident.date : 'Sin informacion',
            'Descripción': incident.descripcion ? incident.descripcion : 'Sin informacion',
            'Tipo': incident.type ? incident.type : 'Sin informacion',
            'Zona': incident.zone ? incident.zone : 'Sin informacion',  
        }
        return Object.keys(data).map((element, i) => {
            if(element !== 'usuarioId' ){
                return <React.Fragment key={element}><label>{element}: {data[element]}</label><br/></React.Fragment>
            }
        });
    }

    render() {
        return (
            <Map center={[19.2433, -103.725]} style={{height:'100%'}} zoom={10}>
                {this.renderMarkers()}
                <DescriptionCard 
                    show={this.state.showModal}
                    handleClose={this.handleClose}
                    title={this.state.selectedIncident.title}
                    renderContent={this.renderBodyContent}
                />
        </Map>
        );
    }
}

export default MapView;
