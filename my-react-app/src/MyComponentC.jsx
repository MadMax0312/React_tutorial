import React from 'react'
import { useContext } from 'react'
import { UserContext } from './useContext'

function MyComponentC() {
    const user = useContext(UserContext)
  return (
    <div>
        <h4>Component 4</h4>
        <p>{`Hello ${user}`}</p>
    </div>
  )
}


export default MyComponentC