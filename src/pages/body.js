import * as React from 'react'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = () => {
    this.setState({
      isLogged: !this.state.isLogged,
    })
	this.props.isLogged(this.state.isLogged)
  }

  render() {
    return (
      <>
        <div className="col-sm">
          <button
            id="button-addon2"
            type="button"
            className="btn btn-buy"
            onClick={this.handleClick}
          >
            {!this.state.isLogged ? 'Connect' : 'Buy Product'}
          </button>
        </div>
        <div className="col-sm">
          <button
            id="button-addon2"
            type="button"
            className="btn btn-buy"
            onClick={this.handleClick}
          >
            {!this.state.isLogged ? 'Connect' : 'Buy Product'}
          </button>
        </div>
        <div className="col-sm">
          <button
            id="button-addon2"
            type="button"
            className="btn btn-buy"
            onClick={this.handleClick}
          >
            {!this.state.isLogged ? 'Connect' : 'Buy Product'}
          </button>
        </div>
        <div className="col-sm">
          <button
            id="button-addon2"
            type="button"
            className="btn btn-buy"
            onClick={this.handleClick}
          >
            {!this.state.isLogged ? 'Connect' : 'Buy Product'}
          </button>
        </div>
      </>
    )
  }
}

export default Body
