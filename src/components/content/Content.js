import React, { Component } from 'react'
import FilmsList from '../films/FilmsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Row} from 'reactstrap';

class Content extends Component {
    render(){
        //console.log(this.props);
        const { films } = this.props;
        return(
            <Row className="justify-content-between align-items-start pt-2 pb-2">
                <FilmsList films={films}/>
            </Row>
        )
    }
}

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
)(Content)