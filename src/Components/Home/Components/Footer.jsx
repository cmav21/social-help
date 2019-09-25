import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Footer = () => (
    <Container fluid={true} className="description">
        <Container className="description pt-4">
            <h1>Contactanos</h1>
            <Row className="mt-5">
                <Col md={4}>
                <Card className="description text-left" style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Direccion: </Card.Title>
                        <Card.Text>
                            Universidad de colima
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className="description text-left" style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Telefono: </Card.Title>
                        <Card.Text>
                            312 316 1075
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className="description text-left" style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Email: </Card.Title>
                        <Card.Text>
                            cmagallon@ucol.mx
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="tel" placeholder="Telefono" />
                            </Form.Group>
                        </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control type="text" width="100%" placeholder="Mensaje" />
                            </Form.Group>
                        <Button className="my-4" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Footer;