import React, { useState, createContext } from 'react'
import MyComponentA from './MyComponentA'

export const UserContext = createContext()

function MyComponent() {

  const [user, setUser] = useState('Max')
  return (
    <div>
        <h1>Component 1</h1>
        <p>{`Hello ${user}`}</p>
      <UserContext.Provider value={user}>
        <MyComponentA />
        </UserContext.Provider>

    </div>
  )
}

export default MyComponent