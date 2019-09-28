import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Greet extends Component {
    render() {
        return(
            <div>
                <Container>
                    <h1 className="display-1">404</h1>
                    <h1 className="display-5">La pagina no fue encontrada</h1>
                </Container>       
            </div>
        );
    }
}

export default Greet;