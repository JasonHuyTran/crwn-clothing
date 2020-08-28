import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component.jsx';
import {ShopPage} from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
//we wanna store the state of our user in our app 
//wanna store the user data in the app state so we can use that information to pass in components that we need it 
import { auth } from './firebase/firebase.utlis';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //componentDidMount() is a one off thing 
  //we want when the authenication state has changed
  //firebase gives us 
  componentDidMount() {
    //this is an open subscription 
    //whenver any change occurs related o this application
    //firebase sends out a message that something has changed
    //they signed out or using some other services
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route path = '/signin' component = {SignInAndSignUpPage}/>
        </switch>
      </div>
    );
  }
}

export default App;
