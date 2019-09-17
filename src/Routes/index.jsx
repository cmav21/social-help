import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greet from '../Components/Greet';
import Incidents from '../Components/Incidents/Incidents';
import AboutUs from '../Components/About/AboutUs';
import Simbology from '../Components/Simbology/Simbology';
import Home from '../Components/Home/Home';


const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/incidentes" exact component={Incidents} />
            <Route path="/Simbologia" exact component={Simbology} />
            <Route path="/nosotros" exact component={AboutUs} />
            <Route component={Greet}/>
        </Switch>
    </Router>

);

export default AppRouter;