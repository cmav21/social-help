import React from 'react';
import { Card } from 'react-bootstrap';

const Symbol = ({ image, text }) => (
    <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Text>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default Symbol;