import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFilms } from '../../store/actions/filmAction'



class CreateFilms extends Component {
    state ={
        title: '',
        content: '',
        price: '',
        img: '',
        video: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createFilms(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Добавить фильм</h5>
                    <div className="input-field">
                        <label htmlFor="title">Название фильма</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Содержание фильма</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Цена</label>
                        <input type="text" id="price" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="img">Постер фильма</label>
                        <input type="text" id="img" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="video">Трейлер фильма</label>
                        <input type="text" id="video" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink">Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createFilms: (film) => dispatch(createFilms(film))
    }
}
export default connect(null, mapDispatchToProps)(CreateFilms)
