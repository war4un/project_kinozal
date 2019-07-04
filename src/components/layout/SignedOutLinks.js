import React from 'react'
import { NavLink } from 'react-router-dom'
import {Col, Nav, NavItem, Row} from 'reactstrap';

const SignedOutLinks = () => {
    return(
        <Col xs="8 offset-4" >
            <Nav navbar>
                <Row className="justify-content-end flex-nowrap align-items-center">
                    <Col >
                        <NavItem><NavLink to='/signin' style={{textDecoration: 'none'}}>
                            <div className="header_title">
                                Войти
                            </div>
                        </NavLink></NavItem>
                    </Col>
                    <Col>
                        <NavItem><NavLink to='/signup' style={{textDecoration: 'none'}}>
                            <div className="header_title">
                                Регистрация
                            </div>
                        </NavLink></NavItem>
                    </Col>
                </Row>
            </Nav>
        </Col>
    )
}

export default SignedOutLinks