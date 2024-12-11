import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div className='a'>
        <h2>Hello, {props.userName}</h2>
      <h1>Component B</h1>
      <CompC user = {props.userName}/>
    </div>
  )
}

export default CompB
