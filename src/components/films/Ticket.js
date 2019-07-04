import React from 'react';
import {Row, Col, Button, Input} from 'reactstrap';
import classnames from "classnames";
import './Ticket.css';

const Ticket = ({place,sum}) => {
    console.log(place);

    return (
        <form className="decor">
            <div className="form-left-decoration"></div>
            <div className="form-right-decoration"></div>
            <div className="circle"></div>
            <div color="" className="form-inner d-flex flex-column justify-content-around align-items-center">
                <div className="h3 ticket_title">Купон на фильмы</div>
                <div className="ticket place_sum">сколько мест</div>
                <div className="ticket place_num">какие места</div>
                <div className="ticket sum">стоимость</div>
                <div className="ticket code">ваш код для покупки</div>
                <div className="ticket message">Приятного просмотра</div>
                <Button color="primary">На главную</Button>
            </div>
        </form>
    );
};

export default Ticket;