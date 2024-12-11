import React from 'react'
import CompB from './CompB'
import { useState } from 'react'

const CompA = () => {
    const[userName,setUserName] = useState("Adithya")
  return (
    <div className='a'>
      <h1>Component A</h1>
      <CompB userName={userName}/>
    </div>
  )
}

export default CompA
