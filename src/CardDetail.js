import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardDetail = (props) => {
    return (
        <div className='col-3'>
            <Card>
                <CardImg top width="100%" height="310 px" style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1573158612982-034c1494d647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Card image cap" />                <CardBody>
                <CardTitle> <h1>{props.name}</h1></CardTitle>
                    <CardSubtitle>{props.job}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <div className="content">{props.children}</div>

            </CardBody>
            </Card>
        </div>
    );
};

export default CardDetail;