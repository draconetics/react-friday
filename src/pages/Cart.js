import React from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

function CardInfo(props) {
    let {url, detail, key} = props.info;
    return (
        <Col sm="4" className="mt-1" key={key}>
        <Card>
            <CardImg top width="100%" src={url} alt={detail} />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{detail}</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
        </Col>
    );
}

export default CardInfo;