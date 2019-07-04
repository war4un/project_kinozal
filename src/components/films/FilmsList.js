import React from 'react';
import FilmsWrapper from './FilmsWrapper'
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap';
import './FilmsWrapper.css'


const FilmsList = ({films}) => {
    return(
        <Col xs="12">
            <Row className="align-items-start">
            {films && films.map(film => {
                return (
                    <Col sm="4" md="3" className="mb-2 mt-2 ">
                    <Link to={'/films/' + film.id} key={film.id} style={{textDecoration: 'none'}}>
                        <FilmsWrapper film={film} key={film.id}/>
                    </Link>
                    </Col>
                )
            })}
            </Row>
        </Col>
    )
};

export default FilmsList