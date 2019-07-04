import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import cinema_logo from '../../img/cinema-logo.png'
import './NavBar.css'
import {Container, Row, Col, CardImg} from 'reactstrap';

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <div className="nav_bar">
            <Container>
                <Row className="justify-content-between flex-nowrap align-items-center pt-2 pb-2">
                    <Col  xs="5" className="footer_img">
                        <Row className="justify-content-start flex-nowrap align-items-center">
                            <Col xs="3">
                                <Link to='/' style={{textDecoration: 'none'}}>
                                    <img src={cinema_logo} alt="RelaxCinema"/>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <div className="heder_title">
                                        RelaxCinema
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="7">
                        <Row className="justify-content-end flex-nowrap align-items-center">
                            {links}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)