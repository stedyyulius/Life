import React, { Component } from 'react'

import '../styles/Auth.css'

class Auth extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  login(){
    window.location = '/'
  }

  render(){
    return(
    <div className="body">
      <div className="login-form">
        <img className="logo"
          src="https://lh4.googleusercontent.com/FUeR_vfW20c0t9aGpMDaD5n4NkcP6oJ_zT8Ub6bysfP4NfK8IMh7YSgoHRLY12csRD17Tm1hZ8Jm6B8=w1366-h662-rw"
          alt="logo" />
          <img className="logo-text"
            src="https://lh6.googleusercontent.com/0SqgRXxPg04yk4EX1fbs8QkvCMWL5oo-gO5nVha02OrN6rOKg-HEhqSOXn7HETqxYdN0Ya1LFx9cR18=w1366-h662"
            alt="logo" />
         <div className="form-group">
           <input type="text" className="form-control" placeholder="Username " id="UserName" />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status">
           <input type="password" className="form-control" placeholder="Password" id="Passwod" />
           <i className="fa fa-lock"></i>
         </div>
         <button type="button" className="log-btn" onClick={()=>this.login()}>Log in</button>
       </div>
     </div>
    )
  }
}

export default Auth
