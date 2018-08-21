import React, { Fragment, Component } from 'react'

class Sushi extends Component {

state = {
  eaten: false
}


clickSushi = () => {
  if (this.props.sushi.price <= this.props.money) {
    this.props.chosenSushi(this.props.sushi)
    this.setState({
      eaten: true
    })
  }
  else return null
}


  render() {
    return (
    <div className="sushi">
      <div className="plate"
           onClick={this.clickSushi}>
        { this.state.eaten === true ? null : <img src={this.props.sushi.img_url} width="100%" alt=""/>}
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi
