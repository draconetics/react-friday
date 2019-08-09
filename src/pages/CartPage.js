import React from 'react';
import { Button, Container, Row, Col, Card, CardImg,CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import {photoList} from '../shared/photos';
import Cart from './Cart';
import FormPage from './FormPage';

class CartPage extends React.Component {

    constructor() {
        super();
        this.state={
            photoList:photoList
        }

        this.deletePhoto = this.deletePhoto.bind(this);
    }

    addPhoto(photoObject){
        let {url,description} = photoObject;
        console.log("save");
        console.log(photoObject);
        this.setState({
            photoList: [...this.state.photoList,photoObject]
        });
    }

    deletePhoto(index){
        this.setState({
            photoList: this.state.photoList.filter(item=>item.id !== index)
        });
    }

    render() {
        const PhotoList = this.state.photoList.map((photo, i)=><Cart info={photo} key={i} delete={this.deletePhoto.bind(this)}/>);
        return (
            <Container>
                <h1 className="display-3 photowall-title">PhotoWall</h1>
                <Row>
                <Col xs="4">
                    Area de Formulario
                    <FormPage addPhoto={(e)=>this.addPhoto(e)}></FormPage>
                </Col>
                <Col xs="8">
                    <Row>
                    {PhotoList}
                    </Row>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default CartPage;