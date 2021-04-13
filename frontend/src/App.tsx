import React from 'react';
import './App.scss';
import {Route, Switch, useHistory} from 'react-router-dom'

//mycomponents
import Header from './components/Header'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Edit from './components/Edit';
import SignIn from './components/SignIn';


function App() {
  const history = useHistory()
  let myStyles: object = {
    border: '1px solid red'
  }
  let auth: boolean = false
  let currentYear = new Date().getFullYear()
  return (
    <div className="App">
      <Header>
        <h1>NewUsual</h1>
        <div>Welcome to newusual store!!</div>
      </Header>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        {auth ? <Route exact path="/edit" component={Edit} />: history.push('/signup')}
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    <Footer>
        <div style={{color: '#ffffff', marginTop: '30vh'}}>
          <h2> &copy; { currentYear } by katigbanoma designs</h2>
        </div>
      </Footer>
    </div>
  );
}

export default App;
