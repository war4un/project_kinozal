import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {NavLink} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {Row, Col} from 'reactstrap';
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import {Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';


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
                    <Row className="justify-content-around">
                        <Col xs="4" className="d-img">
                            <Card claccName="card_item">
                                <CardImg className="card_img" top width="100%" src={film.img} alt={film.title}/>
                            </Card>
                        </Col>
                        <Col xs="6" className="">
                            <Row className="flex-column justify-content-between">
                                <Col xs="">
                                    <div className="d-content_item">
                                        {film.content}
                                    </div>
                                </Col>
                                <Col xs="">
                                    <div className="painting">
                                        <Row>
                                            <Col>
                                                <NavLink to='/hallo'>
                                                    <Card small inverse color="info">
                                                        <CardTitle>relax зал</CardTitle>
                                                        <CardText>Цена от 250 руб</CardText>
                                                        <Button color="secondary">20:00</Button>
                                                    </Card>
                                                </NavLink>
                                            </Col>
                                            <Col>
                                                <NavLink to='/hallo'>
                                                    <Card small inverse color="primary">
                                                        <CardTitle>relax зал</CardTitle>
                                                        <CardText>Цена от 250 руб</CardText>
                                                        <Button color="secondary">11:20</Button>
                                                    </Card>
                                                </NavLink>
                                            </Col>
                                            <Col>
                                                <NavLink to='/hallo'>
                                                    <Card small inverse
                                                          style={{backgroundColor: '#333', borderColor: '#333'}}>
                                                        <CardTitle>relax зал</CardTitle>
                                                        <CardText>Цена от 250 руб</CardText>
                                                        <Button color="secondary">15:00</Button>
                                                    </Card>
                                                </NavLink>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Row className="justify-content-end">
                        <div className="video-container">
                            <iframe
                                title={film.title}
                                src={film.video}
                                width="640"
                                height="360"
                                frameBorder="0"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-end">
                        <div className="video-container">
                            <iframe
                                title={film.title}
                                src={film.video}
                                width="640"
                                height="360"
                                frameBorder="0"
                                allowFullScreen>
                            </iframe>
                        </div>
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