import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
//we wanna store the state of our user in our app 
//wanna store the user data in the app state so we can use that information to pass in components that we need it 
import { auth, createUserProfileDocument } from './firebase/firebase.utlis';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'


class App extends React.Component {

  unsubscribeFromAuth = null;

  //componentDidMount() is a one off thing 
  //we want when the authenication state has changed
  //firebase gives us 
  componentDidMount() {
    const {setCurrentUser} = this.props;

    //this is an open subscription 
    //whenever any change occurs related to this application
    //firebase sends out a message that something has changed
    //they signed out or using some other services
    //runs when they log in or something 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user is logged in through google?
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //if the snapshot has changed
        //subscribe (listen)
        //snapShot allows us to get property of that data using the .data method 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              //spreading the rest of the data 
              ...snapShot.data()
          });
        });
      }
      //there is no object or the user logs out 
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  //prevents memory leak
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route exact path = '/checkout' component = {CheckoutPage}/>
          <Route exact path = '/signin' render={() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
}

//off of our state
const mapStateToProps = createStructuredSelector({
  //destructing user Reducer
  currentUser: selectCurrentUser
})

//dispatch property 
//return property where the prop name
const mapDispatchToProps = dispatch => ({
  //gets the user object
  //dispatch the way for redux to know that whatever you're passing me is going to be an action object that i'm going to pass to every reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


//using second argument of connect to set
//in app js we only set state but we don't actually do anything with state 
export default connect(mapStateToProps, mapDispatchToProps)(App);
