import React from 'react'

const MoreButton = (props) => {

const fourSushi = () => {
  props.selectFour();
}

    return <button onClick={fourSushi}>
            More sushi!
          </button>
}

export default MoreButton
