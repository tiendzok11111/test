import React from 'react'
import '../App.css'
import {
  Navbar,
  Nav,
  NavItem,
  Container,
  Dropdown,
  DropdownButton,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
	onChange = () => {
		this.props.changeStatus()
	}
  render() {
	  console.log(this.props)
    return (
      <>
        <div className="header-line-wrapper">
          <header className="header-wrapper fixed-top plr100">
            <div id="header" className="main-menu">
              <Navbar collapseOnSelect expand="lg" className="navbar-dark">
               
			   <button onClick={this.onChange} style={{marginLeft: '400px'}} value="123" type="button" className="ml-5 btn btn-danger">{this.props.isLogged ? 'Click Me' : 'Hello Admin'} </button>
			   
              </Navbar>
            </div>
          </header>
        </div>
      </>
    )
  }
}

export default Header
