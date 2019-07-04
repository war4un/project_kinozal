import React, {Component} from 'react';
import {CardImg, Col, Row,} from "reactstrap";
import screen from '../../img/hall-screen.svg'
import cinema_logo from "../../img/cinema-logo.png";
import classnames from 'classnames';

class PlaceHall extends Component {
    placeID = (e) => {
        const id_row = e.currentTarget.dataset.row;
        const id_place = e.currentTarget.dataset.place;
        this.props.choiceOfPlaces(id_row, id_place);
    };
    render() {
        let {place} = this.props;
        return (
            <Row className="cinema_place_item">
                <Col xs="12">
                    <CardImg central width="100%" src={screen} alt="Кинотеатр Cinema Place"/>
                </Col>
                <Col>
                    {place && Object.keys(place).map((row) =>
                        <Row className="justify-content-center">
                            {Object.keys(place[row]).map((place_id) =>
                                <Col xs="1"
                                     data-row={row}
                                     className={classnames('place_item', {'close_place': place[row][place_id]['status'] == 'close_place'})}
                                     data-place={place_id}
                                     onClick={this.placeID}>
                                    {place[row][place_id].place}
                                </Col>
                            )}
                        </Row>
                    )}
                </Col>
            </Row>
        );
    }
}
export default PlaceHall;