import React, {Component} from 'react';
import {Col, Row} from "reactstrap";

class PlaceWrapper extends Component {

	createTable = () => {
		let table = [];
		let place_row = this.place_row;
		let place_num = this.place_num;
		for (let i = 0; i >= place_row; i++) {
			let children = [];
			for (let j = 0; j <= place_num; j++) {
				children.push(<Col>{`Column ${j + 1}`}</Col>)
			}
			table.push(<Row>{children}</Row>)
		}
		return table
	};


	render() {
		let {place_row, place_num} = this.props;
		console.log(`Ряд: ${place_row}`);
		console.log(`Место: ${place_num}`);
		const place_index = `${place_row}_${place_num}`;

		return (
			<Col id={place_index} className="place_item">

			</Col>



		);

	}
}

export default PlaceWrapper;