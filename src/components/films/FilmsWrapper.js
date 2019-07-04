import React from 'react'
import {Row, Col} from 'reactstrap';
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';


const FilmsWrapper = ({film}) => {
    return (

            <Card claccName="card_item">
                <CardImg className="card_img" top width="100%" src={film.img} alt={film.title}/>
                <CardBody>
                    <CardTitle className="card_title">{film.title}</CardTitle>
                </CardBody>

            </Card>

    )
};

export default FilmsWrapper





