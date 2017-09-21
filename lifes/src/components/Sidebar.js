import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Sidebar.css'

const Pages = [{
    name: 'Home',
    url: '/',
    icon: 'ion-home',
    section: 'home'
},{
    name: 'Planner',
    url: '/planner',
    icon: 'ion-clipboard',
    section: 'planner',
},{
    name: 'Insurance',
    url: '/insurance',
    icon: 'ion-ios-box',
    section: 'insurance'
},{
    name: 'Goal',
    url: '/goal',
    icon: 'ion-disc',
    section: 'goal',
}];

class Sidebar extends Component{
  constructor(props){
  super(props)
  this.state={
    username  : "",
    isActive  : false,
    link      : Pages
  }
}

  render(){
    return(
      <div className="sidebar sidebar-show">
        <div className="sidebar-avatar">
          <div className="sidebar-overlay">
            <div className="sidebar-inner">
              <div className="sidebar-image">
                <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"/>
              </div>
              <div className="sidebar-name"> User: stedy</div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills nav-stacked">
          {this.state.link.map((item,index)=> {
              return (
              <li key={index}>
                <Link to={item.url}>
                  {item.name}
                  <i className={item.icon}></i>
                </Link>
              </li>
              )
          })}
          <li>
            <a href="/login" className="li">
               Log Out
               <i className="ion-log-out"></i>
             </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
