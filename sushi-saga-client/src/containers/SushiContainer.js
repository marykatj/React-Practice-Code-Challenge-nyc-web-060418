import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const chosenSushi = (chosenSushi) => {
    //console.log(chosenSushi)
    props.selectedSushi(chosenSushi)
  }

const sushiMapper = () => {
  return props.sushis.map((sushi, index) => <Sushi key={sushi.id} sushi={sushi} allSelectedFish={props.allSelectedFish} chosenSushi={chosenSushi} money={props.money}/>)
}


  return (
    <Fragment>
      <div className="belt">
        {sushiMapper()}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer

// const sushiMapper = () => {
//  let fourFish = [];
//  let multiFish = props.sushis
//
// for(let i = 0; i < multiFish.length; i+=4) {
//      let oneSet = [];
//      oneSet.push(multiFish.slice(i, i+4).map(sushi => { return <Sushi key={sushi.id} sushi={sushi} allSelectedFish={props.allSelectedFish} chosenSushi={chosenSushi} money={props.money}/>}))
//   fourFish.push(oneSet.map(sushi => {return <Sushi key={sushi.id} sushi={sushi} allSelectedFish={props.allSelectedFish} chosenSushi={chosenSushi} money={props.money}/>}))
//   };
// return fourFish;
// };
