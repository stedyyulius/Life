import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store.js'
import './App.css'

import Auth from './components/Auth'
import NotFound from './components/NotFound'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Insurance from './components/Insurance'
import Planner from './components/Planner'
import Goal from './components/Goal'

class App extends Component {

  render() {
    let url = window.location.href.split('/')[3]
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
        {(url !== 'login')
        ? <div><Navbar /><Sidebar /></div>
        : <div></div>
      }
            <Switch>
              <Route exact path="/login" component={Auth} />
              <Route exact path="/" component={Home} />
              <Route exact path="/insurance" component={Insurance} />
              <Route exact path="/planner" component={Planner} />
              <Route exact path="/goal" component={Goal} />
              <Route component={NotFound} />
            </Switch>
          </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
