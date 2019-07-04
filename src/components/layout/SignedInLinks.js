import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut, signIn } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
    const uid = 'BrHNrtjcebUUeeeXa7A8HZkO0Gf2';
    const { auth } = props;
    const links = auth.uid === uid ? <li><NavLink to='/create'>Добавить фильм</NavLink></li> : 
    <li><NavLink to='/create'>Профиль</NavLink></li>
    return(
        <ul className="right">
            {links}
            <li><NavLink to='/'><a onClick={props.signOut}>Выйти</a></NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return{
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