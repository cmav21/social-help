import React, { Component } from 'react';
import Map from 'pigeon-maps';
import DescriptionCard from './Components/DescripcionCard';
import Overlay from 'pigeon-overlay';

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
            return <Overlay key={incident} anchor={[incidents[incident].latitude, incidents[incident].longitude]} offset={[15, 30]}>
                <img src={require(`../../../../assets/${this.props.type.zone}.png`)} offset={0} alt="" width="30px" onClick={()=>this.saveIncidentHandler(this.props.incidents[incident])} style={{cursor: 'pointer'}} />
            </Overlay>
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
