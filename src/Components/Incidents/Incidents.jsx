import React, { Component } from 'react';
import firebase from 'firebase';
import IncidentsCard from './IncidentsCard';

class Incidents extends Component {
    
    state = {
        incidents: []
    }

    componentWillMount = () => {
      
    }
    

    componentDidMount(){
        firebase.database().ref('incidents').on('value', (snapshot)=> {
            let data = snapshot.val();
            this.setState({
                incidents: data
            })
        });
    }

    renderIncidentsHandler = () => {
        let keys = Object.keys(this.state.incidents);
        console.log(keys);
        return keys.map((incident, i) => {
            return <IncidentsCard key={incident} {...this.state.incidents[incident]}/>
        })
    }
    
    render(){
        return(
            <div>
                {
                    this.renderIncidentsHandler()
                }
            </div>
        );
    }
}

export default Incidents;