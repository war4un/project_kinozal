import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/signin'>Войти</NavLink></li>
            <li><NavLink to='/signup'>Регистрация</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks