import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Body from './pages/body'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
		status: true,
		isLogged: true	
	}
  }
  isLogged = (status) => {
    this.setState({
      status: status,
	  	  isLogged: !this.state.isLogged
    })
  }
  changeStatus = () => {
	  this.setState({
		  isLogged: !this.state.isLogged,
		    status: !this.state.status,
	  })
  }
  render() {
    return (
      <div>
        <Router>
          <Header status={this.state.status}  isLogged={this.state.isLogged} changeStatus={this.changeStatus}/>
          <div className="full main-body pt150">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                  <Body isLogged={this.isLogged} />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
    )
  }
}
