import React, {useContext} from 'react'
import Two from './Two'

function One() {
  return (
    <div style={{backgroundColor:'orange',width:'400px'}}>
        <h1>One Layer</h1>
        <Two></Two>
    </div>
  )
}

export default One