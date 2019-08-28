import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import {Modal} from 'react-bootstrap';

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
            console.log(incidents[incident]);         
            return <Marker key={incident} anchor={[incidents[incident].latitude, incidents[incident].longitude]} payload={1} onClick={()=>this.saveIncidentHandler(this.props.incidents[incident])} />
        });

    }

    saveIncidentHandler = (selectedIncident) => {
        console.log(selectedIncident);
        this.setState({
            selectedIncident
        })
        this.handleShow();
    }

    renderBodyContent = () => {
        const incident = Object.keys(this.state.selectedIncident);
        return incident.map((element, i) => {
            if(element !== 'usuarioId' ){
                return <><label>{element}: {this.state.selectedIncident[element]}</label><br/></>
            }
        });
    }

    render() {
        return (
            <Map center={[19.2433, -103.725]} zoom={10}>
                {this.renderMarkers()}
            
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedIncident.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderBodyContent()}
                    </Modal.Body>
                </Modal>
        </Map>
        );
    }
}

export default MapView;
