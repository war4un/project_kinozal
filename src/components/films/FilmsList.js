import React from 'react';
import FilmsWrapper from './FilmsWrapper'
import {Link} from 'react-router-dom'
import {Col} from 'reactstrap';
import './FilmsWrapper.css'


const FilmsList = ({films}) => {
    return(
        <Col xs="4" className="content_card">
            {films && films.map(film => {
                return (
                    <Link to={'/films/' + film.id} key={film.id}>
                        <FilmsWrapper film={film} key={film.id}/>
                    </Link>
                )
            })}
        </Col>
    )
}

export default FilmsList