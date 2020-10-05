import React, {useState} from 'react';
import {ListGroup, Jumbotron, Form, Button, Container, Row, Col, Modal} from 'react-bootstrap';

function Konten(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Container>
                <Row>
                    <Col sm={3}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>Liga 1 Indonesia</ListGroup.Item>
                            <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
                            <ListGroup.Item as="li">Divisi Primera</ListGroup.Item>
                            <ListGroup.Item as="li">Serie A</ListGroup.Item>
                            <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
                            <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
                        </ListGroup>
                    
                    </Col>
                    <Col sm={5}>
                        <Jumbotron>
                            <h1>Divis Primera</h1>
                            <p>Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
                            <p><Button variant="primary">Read more</Button></p>
                        </Jumbotron>
                    
                    </Col>
                    <Col>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Masukan email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Terms & Condition" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleShow}>
                            Login
                        </Button>
                        </Form>

                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Anda berhasil Login.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleClose}>Save Username & Password</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Konten