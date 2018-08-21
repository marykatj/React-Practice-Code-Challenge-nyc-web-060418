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
    fourSushi: [1, 4],
    moneyLeft: 100,
    currentFourSushi: []
  }

  componentDidMount() {
    fetch(API).then(response => response.json()).then(data => this.setState ({
      allSushis: data
    }));
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

selectFour = () => {
  const x = this.state.fourSushi[0]
  const y = this.state.fourSushi[1]
  this.setState({
    fourSushi: [x+4, y+4]
  });
  this.sushiDivvy();
}

sushiDivvy = () => {
  const sushiRolls = this.state.allSushis.filter(oneSushi => oneSushi.id >= this.state.fourSushi[0] && oneSushi.id <= this.state.fourSushi[1])
  this.setState({
    currentFourSushi: sushiRolls
  })
}




  render() {
    console.log(this.state.currentFourSushi)
    return (
      <div className="app">
        <SushiContainer money={this.state.moneyLeft} sushis={this.state.currentFourSushi} selectedSushi={this.selectedSushi} allSelectedFish={this.state.allSelectedFish} selectFour={this.selectFour}/>
        <Table sushi={this.state.selectedSushi} money={this.state.moneyLeft} fishArray={this.state.allSelectedFish}/>
      </div>
    );
  }
}

export default App;
