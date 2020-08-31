import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {HomePage} from './pages/homepage/homepage.component.jsx';
import {ShopPage} from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
//we wanna store the state of our user in our app 
//wanna store the user data in the app state so we can use that information to pass in components that we need it 
import { auth, createUserProfileDocument } from './firebase/firebase.utlis';


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
          this.setState({
            currentUser: {
              id: snapShot.id,
              //spreading the rest of the data 
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      //there is no object or the user logs out 
      else {
        this.setState({currentUser:userAuth});
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
