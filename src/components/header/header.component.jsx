import React from 'react';
import {Link} from 'react-router-dom'
//higher order component
//functions that take components as arguments 
import {connect} from 'react-redux'

import {auth} from '../../firebase/firebase.utlis'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to="/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            
            <Link className = 'option' to='/shop'>
                SHOP
            </Link>
            <Link className = 'option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className = 'option' onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className = 'option' to = '/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

//gets state object which is the root reducer (top level root reducer)
//we get state object and then user and the current user from user-reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

//function that allows us to access the state 
export default connect(mapStateToProps)(Header);