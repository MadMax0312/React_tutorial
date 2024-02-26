import React, {useContext} from 'react'
import { AppContext } from '../AppContext'

function Three() {

  const data = useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:'200px'}}>
      <h1>Layer Three {data}</h1>
    </div>
  )
}

export default Three