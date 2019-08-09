import React from 'react';
import { Button, Container, Row, Col, Card, CardImg,CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

function CartPage() {
    return (
        <Container>
            <h1 className="display-3 photowall-title">PhotoWall</h1>
            <Row>
            <Col xs="4">
                Area de Formulario
            </Col>
            <Col xs="8">
                Lista de Photos
            </Col>
            </Row>
        </Container>
    );
}

export default CartPage;