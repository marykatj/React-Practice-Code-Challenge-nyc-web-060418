import React, { Fragment } from 'react'

const Sushi = (props) => {

  const { sushi } = props;

const clickSushi = () => {
  if (sushi.price <= props.money) {
    //console.log(sushi)
    props.chosenSushi(sushi)
    //removeSushi()
  }
  else return null
}

// props.fourFishArray.includes(fish => fish.id === sushi.id)
//also could make clicked a state of false, and switch to true


  return (
    <div className="sushi">
      <div className="plate"
           onClick={clickSushi}>
        { false ? null : <img src={sushi.img_url} width="100%" alt=""/>}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
