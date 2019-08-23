import React, { Component } from 'react';
import MapView from './Components/MapView';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './Home.scss'
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';

class Home extends Component {

    state = {
        class: '',
        startDate: new Date(),
        incidents: []
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

    render(){
        return(
            <>
                <button className="openNav" onClick={this.toogleClass}><i className="fas fa-bars"></i></button>
                <nav>
                </nav>
                <div className={`sideBar ${this.state.class}`}>
                    <ul>
                        <li><span>Filtros</span></li>
                        <li> 
                            <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <span>Zona</span>
                            <select name="aon" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </li>
                        <li>
                            <span>Tipo</span>
                            <select name="aon" id="">
                                <option value="">Robo</option>
                                <option value="">Vandalismo</option>
                                <option value="">Violencia</option>
                            </select>
                        </li>
                        <li>
                            <span>Mis reportes</span>
                            <Button variant="outline-info">Iniciar Sesion</Button>
                        </li>
                    </ul>
                </div>
                <MapView incidents={this.state.incidents}/>
            </> 

        )
    }
}

export default Home;