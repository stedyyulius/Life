import React, { Component } from 'react'

import '../styles/Insurance.css'

class Goal extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className="content container">
        <form id="contact" action="" method="post">
          <img className="page-header"
            src="https://lh4.googleusercontent.com/DgXOT9TDSZaSslyZ2-a0bhQJ2K73zjHrYG397b4hBrEWNEd3rlk9ocS8LoVcG2R03MaQur5XAhJz-wE=w1366-h662-rw" />
          <h4 className="title">Contact us for custom quote</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Goal
