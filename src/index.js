/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from "react-router";

//css
require('./css/index.css');

type Props = {||};

export default class Index extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      userName: '',
      signUp: true,
      sendBool: false,
    });
  }

  _firstNameInput(e) {
    console.log(e.target.value)
    this.setState({
      firstName: e.target.value
    })
  }

  _lastNameInput(e) {
    console.log(e.target.value)
    this.setState({
      lastName: e.target.value
    })
  }

  _passwordInput(e) {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  _emailInput(e) {
    console.log(e.target.value)
    this.setState({
      email: e.target.value
    })
  }

  _userNameInput(e) {
    console.log(e.target.value)
    this.setState({
      userName: e.target.value
    })
  }

  _loginClickHandler() {
    browserHistory.push('/dashboard/statistics');
  }

  _signUpBtnHandler() {
    console.log('sign up clicked')
    this.setState({
      signUp: true
    })
  }

  _loginBtnHandler() {
    console.log('login in clicked')
    this.setState({
      signUp: false
    })
  }

	render() {
    const isSignUp = this.state.signUp;

    const formSheet = isSignUp ? (
      <div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input 
            id="first_name" 
            value={this.state.firstName} 
            onChange={this._firstNameInput.bind(this)}
            type="text" 
            className="validate">
          </input>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s12 m6">
          <input 
            id="last_name"
            value={this.state.lastName} 
            onChange={this._lastNameInput.bind(this)} 
            type="text" 
            className="validate">
          </input>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
            id="email" 
            value={this.state.email} 
            onChange={this._emailInput.bind(this)} 
            type="email" 
            className="validate">
          </input>
          <label for="email">Email</label>
        </div>
      </div>
      </div>
    ) : (
      <div className="row">
        <div className="input-field col s12">
          <input 
            id="userName" 
            value={this.state.userName} 
            onChange={this._userNameInput.bind(this)}
            type="text" 
            className="validate">
          </input>
          <label for="userName">UserName</label>
        </div>
      </div>
    )

      
     return (
      <div>
        <div className="main">JOBSEARCH TRACKER</div>
        <div className="choiceBtns">
          <a className="waves-effect waves-light btn" onClick={this._signUpBtnHandler.bind(this)}><i className="material-icons left">
            cloud</i>Sign-Up
          </a>
          <a className="waves-effect waves-light btn" onClick={this._loginBtnHandler.bind(this)}><i className="material-icons left">
            cloud</i>Login
          </a>
        </div>
        <div className="row mainContainer">
            
            {formSheet}
              
              <div className="row">
                <div className="input-field col s12">
                  <input 
                    id="password" 
                    value={this.state.password} 
                    onChange={this._passwordInput.bind(this)} 
                    type="password" 
                    className="validate">
                  </input>
                  <label for="password">Password</label>
                </div>
              </div>

        </div>
          
        <div className="login-btn">
          <button 
            className="btn waves-effect waves-light"
            onClick={this._loginClickHandler.bind(this)} 
            type="submit" 
            name="action">
            SEND
              <i className="material-icons right">send</i>
          </button>
        </div>
      </div>

    )
	}
}

