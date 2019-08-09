import React from 'react';
import { Button, Container, Row, Col, Card, CardImg,CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import {photoList} from './../shared/photos';

class CartPage extends React.Component {

    constructor() {
        super();
        this.state={
            photoList
        }
    }

    render() {
        const PhotoList = this.state.photoList.map((photo, i)=><p>{photo.detail}</p>);
        return (
            <Container>
                <h1 className="display-3 photowall-title">PhotoWall</h1>
                <Row>
                <Col xs="4">
                    Area de Formulario
                </Col>
                <Col xs="8">
                    {PhotoList}
                </Col>
                </Row>
            </Container>
        );
    }
}

export default CartPage;