import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MemberCard = ({ name, image, title }) => (
    <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {name}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default MemberCard;