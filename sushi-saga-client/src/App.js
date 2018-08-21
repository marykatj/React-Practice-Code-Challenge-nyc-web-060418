import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    selectedSushi: {},
    allSelectedFish: [],
    moneyLeft: 100
  }

  componentDidMount() {
    fetch(API).then(response => response.json()).then(data => this.setState ({
      allSushis: data
    }))
  }

  selectedSushi = (chosenSushi) => {
    const chosenFishArray = [...this.state.allSelectedFish]
    chosenFishArray.push(chosenSushi)
    const newAmount = this.state.moneyLeft - chosenSushi.price
    this.setState({
      selectedSushi: chosenSushi,
      allSelectedFish: chosenFishArray,
      moneyLeft: newAmount
    })
  }


  render() {
    console.log(this.state.allSelectedFish)
    return (
      <div className="app">
        <SushiContainer money={this.state.moneyLeft} sushis={this.state.allSushis} selectedSushi={this.selectedSushi} allSelectedFish={this.state.allSelectedFish}/>
        <Table sushi={this.state.selectedSushi} money={this.state.moneyLeft} fishArray={this.state.allSelectedFish}/>
      </div>
    );
  }
}

export default App;
