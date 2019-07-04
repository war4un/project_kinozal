import React from 'react'
import {Row, Col} from 'reactstrap';


const FilmsWrapper = ({film}) => {
    return(
        <Row className="d-flex">
            <Col xs="4" className="content_card-img">
                <img className="content_card-img__item" src={film.img} alt={film.title}/>
            </Col>
            <Col xs="8">
                <Row>
                    <div className="card-content">
                        <span className="">
                            <h6>{film.title}</h6>
                        </span>
                    </div>
                    <div className="card-reveal">
                        <span className="">
                            <i className="">close</i>
                        </span>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default FilmsWrapper





