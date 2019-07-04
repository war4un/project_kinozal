import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {NavLink} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {Row, Col} from 'reactstrap';
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';


const FilmsDetails = (props) => {
    const {film, auth} = props;
    if (film) {
        return (
            <Row className="card_detalis flex-column justify-content-around align-items-center">
                <Col className="float-left">
                    <div className="d-title">
                        <h1>{film.title}</h1>
                    </div>
                </Col>
                <Col>
                    <Row className="justify-content-between">
                        <Col xs="4" className="d-img">
                            <Card claccName="card_item">
                                <CardImg className="card_img" top width="100%" src={film.img} alt={film.title}/>
                            </Card>
                        </Col>
                        <Col xs="8" className="d-content"></Col>
                    </Row>
                </Col>
            </Row>

        )
    } else {
        return (
            <div className="container center">
                <p>Loading films...</p>
            </div>
        )
    }
}

{/*<div className="video-container">*/
}
{/*    <iframe title={film.title} src={film.video} width="640" height="360" frameBorder="0" allowFullScreen></iframe>*/
}
{/*</div>*/
}

{/*<li><NavLink to='/hallo'>1400</NavLink></li>*/
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const films = state.firestore.data.film;
    const film = films ? films[id] : null
    return {
        film: film
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'film'
    }])
)(FilmsDetails)