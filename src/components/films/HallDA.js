import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Place_hall from './Place_hall'
import {Row, Col, Button} from 'reactstrap';
import './Cinema_hall.css'
import {Link, NavLink} from "react-router-dom";

/*const myFilm = {
    films: [
        {
            id: '1',
            title: 'Проклятие Аннабель 3',
            content: 'Преисполнившись решимости удержать Аннабель от дальнейших разрушений и хаоса, демонологи Эд и Лоррейн Уоррены приносят одержимую куклу в запертую комнату артефактов в своем доме, поместив ее под «надежное» освященное стекло и заручившись благословением священника. Однако беспросветная ночь ужаса ждет обитателей дома, когда Аннабель пробуждает злых духов комнаты и их новой мишенью становится десятилетняя дочь Уорренов Джуди и ее друзья.',
            url: 'https://nas.dcp24.ru/img/movie/11185_big.jpg?1558938718',
            image_preview: 'https://nas.dcp24.ru/thumb_hd/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.jpg',
            video: 'https://nas.dcp24.ru/preview/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.mp4',
            price: '1000',
            age: '18+'
        },
    ]
};*/

const stateFilm = {
    time: '1 июля в 16:00',
    hall: 'Зал DOLBY ATMOS',
    place: {
        price: 250,
        number_place: {},
        sum_tickets: '',
    },
    sum: 0,
    base: {
        0: {
            0: {'row': 'Ряд 1', 'place': 'Место 1', 'status': 'open'},
            1: {'row': 'Ряд 1', 'place': 'Место 2', 'status': 'open'},
            2: {'row': 'Ряд 1', 'place': 'Место 3', 'status': 'open'},
            3: {'row': 'Ряд 1', 'place': 'Место 4', 'status': 'open'},
            4: {'row': 'Ряд 1', 'place': 'Место 5', 'status': 'open'},
        },
        1: {
            0: {'row': 'Ряд 2', 'place': 'Место 1', 'status': 'open'},
            1: {'row': 'Ряд 2', 'place': 'Место 2', 'status': 'open'},
            2: {'row': 'Ряд 2', 'place': 'Место 3', 'status': 'open'},
            3: {'row': 'Ряд 2', 'place': 'Место 4', 'status': 'open'},
            4: {'row': 'Ряд 2', 'place': 'Место 5', 'status': 'open'},
            5: {'row': 'Ряд 2', 'place': 'Место 6', 'status': 'open'},
        },
        2: {
            0: {'row': 'Ряд 3', 'place': 'Место 1', 'status': 'open'},
            1: {'row': 'Ряд 3', 'place': 'Место 2', 'status': 'open'},
            2: {'row': 'Ряд 3', 'place': 'Место 3', 'status': 'open'},
            3: {'row': 'Ряд 3', 'place': 'Место 4', 'status': 'open'},
            4: {'row': 'Ряд 3', 'place': 'Место 5', 'status': 'open'},
            5: {'row': 'Ряд 3', 'place': 'Место 6', 'status': 'open'},
        }
    },
};



class HallDA extends Component {
    constructor(props) {
        super(props);
      }
    choiceOfPlaces = (id_row, id_place) => {
        const arr = stateFilm.base;
        const sum = stateFilm;
        const {number_place} = stateFilm.place;
        const id = `${id_row}_${id_place}`;
        if (arr[id_row][id_place]['status'] !== 'close_place') {
            arr[id_row][id_place]['status'] = 'close_place';
            sum.sum += stateFilm.place.price;
            number_place[id] = arr[id_row][id_place];
        } else {
            arr[id_row][id_place]['status'] = 'open';
            sum.sum -= stateFilm.place.price;
            delete number_place[id];
        }

        this.setState({
            ...stateFilm,
            place: {
                ...stateFilm,
                number_place,
            },
            sum: sum,
            base: arr,
        });
    };

    booked = () => {
        const ticket = stateFilm.place.number_place;
        return (
            <div>
                {ticket && Object.keys(ticket).map((id) =>
                    <Col xs="1">
                        {ticket[id].row}
                        {ticket[id].place}
                    </Col>
                )}
            </div>
        )
    }

    render() {
        const {film} = this.props;
        const {base, sum, place} = stateFilm;
        return (
            <Col>
                <div className="cinema_hall">
                    <Row className="cinema_header">
                        <Col xs="12">
                            <Row>
                                <Col xs="10">
                                    <h3 className="film_title">
                                    {film.title}
                                    </h3>
                                </Col>
                                <Col xs="2">
                                    <Row className="justify-content-end">
                                        <Button
                                            color="primary"
                                            className="align-items-center"
                                        >
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <h6>
                                                    Закрыть
                                                </h6>
                                            </Link>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12">
                            <h4>{stateFilm.time},&nbsp;</h4>
                            <h4>{stateFilm.hall}</h4>
                        </Col>
                    </Row>
                    <Row className="cinema_place">
                        <Col>
                            <div className="hall-legend">
                                <div className="hall-legend__item">
													<span className="hall-legend__color">
													</span>
                                    <span>{stateFilm.place.price}р</span>
                                </div>
                                <div className="hall-legend__item">
                                                    <span className="hall-legend__color hall-legend__color--disabled">
										            </span>
                                    <span>Занято</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Place_hall place={base} choiceOfPlaces={this.choiceOfPlaces}/>
                    <Row className="cinema_footer">
                        <Col xs="12">
                            <Row className="cinema_footer__item">
                                <Col xs={{size: 2, offset: 7}}>
                                    <SUM sum={sum}/>
                                    {this.booked()}
                                </Col>
                                <Col xs="3">
                                    <Row className="justify-content-end cinema_btn">
                                        <NavLink to='/ticket' place={place} sum={sum}>
                                            <Button
                                                color="primary"
                                                className="align-items-center"
                                            >
                                                Забронировать место
                                            </Button>
                                        </NavLink>

                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}

export const SUM = ({sum}) => {
    return (
        <Row className="justify-content-end align-items-center">
            <span>
                Итого: &nbsp;{sum}
            </span>
        </Row>
    )
};


  
 
const mapStateToProps = (state) => {
    return {
        films: state.firestore.ordered.film
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'film'}
    ])
)(HallDA)


