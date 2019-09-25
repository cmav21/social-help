import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greet from '../Components/Greet';
import Incidents from '../Components/Incidents/Incidents';
import AboutUs from '../Components/About/AboutUs';
import Simbology from '../Components/Simbology/Simbology';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';


const AppRouter = () => (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/incidentes" exact component={Incidents} />
                <Route path="/simbologia" exact component={Simbology} />
                <Route path="/nosotros" exact component={AboutUs} />
                <Route path="/ingresar" exact component={Login} />
                <Route component={Greet}/>
            </Switch>
        </Router>
);

export default AppRouter;