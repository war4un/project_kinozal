import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'
import {Nav, NavItem, Col, Row} from 'reactstrap';

const SignedInLinks = (props) => {
    const uid = 'BrHNrtjcebUUeeeXa7A8HZkO0Gf2';
    const {auth} = props;
    const links = auth.uid === uid ? <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
            <div className="header_title">
                Добавить&nbsp;фильм
            </div>
        </NavLink></NavItem> :
        <NavItem><NavLink to='/create' style={{textDecoration: 'none'}}>
            <div className="header_title">
                Профиль
            </div>
        </NavLink></NavItem>
    return (
        <Col xs="9 offset-3">
            <Nav navbar>
                <Row className="justify-content-end flex-nowrap align-items-center">
                    <Col>
                        {links}
                    </Col>
                    <Col>
                        <NavItem><NavLink to='/' style={{textDecoration: 'none'}}>
                            <div onClick={props.signOut} className="header_title">
                                Выйти
                            </div>
                        </NavLink></NavItem>
                    </Col>
                </Row>
            </Nav>
        </Col>
    )
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)