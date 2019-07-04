import React from 'react';
import {Col, Row, Container} from 'reactstrap'
import './Footer.css'

import cinema_logo from '../../img/cinema-logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="justify-content-between flex-nowrap align-items-center pt-2 pb-2">
                    <Col xs="3" className="footer_img">
                        <img src={cinema_logo} alt="RelaxCinema"/>
                    </Col>
                    <Col xs="5" className="soc">
                        <div className="address">Кинотеатр RelaxCinema © 2019. Все права защищены.</div>
                    </Col>
                    <Col xs="4" className="address">
                        <Row className="d-flex justify-content-between flex-column align-items-start">
                            <div>Ульяновск</div>
                            <div>проспект Нариманова, дом 1,</div>
                            <div>строение 2, 3-й этаж (главный офис)</div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;