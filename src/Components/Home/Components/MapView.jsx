import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapView extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (props, marker, e) =>{
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: !this.state.showingInfoWindow
        });
    }
        
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            })
        }
    };

    markersHandler = () => {
        let incidents = Object.keys(this.props.incidents);
        return incidents.map((incident, i) => {
            const {city, latitude, longitude, title, description} = this.props.incidents[incident];
            return (
                <Marker 
                    key={i} 
                    onClick={this.onMarkerClick}
                    name={city}
                    title={title}
                    description={description}
                    position={{lat: latitude, lng: longitude}}
                />
            );
        })
    }

    render() {
        return(
            <Map 
                google={this.props.google}
                onClick={this.onMapClicked}
                zoom={8}
                styles={[{
                    width:'100%',
                    height: '100%'
                }]}
                initialCenter={{lat:47.444, lng: -122.176}}
            >
                {
                    this.markersHandler()
                }
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <div>
                            Titulo:
                            {this.state.selectedPlace.title}
                        </div>
                        <div>  
                            Descripcion:
                            {this.state.selectedPlace.description}
                        </div>
                        <a href="http://" target="_blank" rel="noopener noreferrer">{`<<ver detalles>>`}</a>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDArus-cyzxHe4nelbfT3JjACCRG3AUZsg'
})(MapView);