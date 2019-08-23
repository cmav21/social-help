import React, { Component } from 'react';
import firebase from 'firebase';
import IncidentsCard from './IncidentsCard';
import { CLIENT_RENEG_LIMIT } from 'tls';

class Incidents extends Component {
    
    state = {
        incidents: []
    }

    componentDidMount(){    
        // let data = {

        //     date: '2018-12-12',
        //     zone: 'centro',
        //     type: 'robo',
        //     city: 'colima',
        //     longitude: 12.122,
        //     latitude: -2.213, 
        //     description: 'Ocurrio un robo',
        //     title: 'Robo',
        // }
        // firebase.database().ref('incidents').push(data, (err)=>{
        //     if(err)
        //         throw new Error(err);
        // })

        firebase.database().ref('incidents').on('value', (snapshot)=> {
            let data = snapshot.val();
            this.setState({
                incidents: data
            })
        });
    }

    renderIncidentsHandler = () => {
        let keys = Object.keys(this.state.incidents);
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