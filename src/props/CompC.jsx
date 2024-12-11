import React from 'react'
import CompD from './CompD'

const CompC = (props) => {
  return (
    <div className='a'>
      <h1>Component C</h1>
      <CompD user = {props.userName} />
    </div>
  )
}

export default CompC
