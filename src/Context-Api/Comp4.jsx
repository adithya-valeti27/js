import React from 'react'
import { UserContext } from './Context';
import { useContext } from 'react';

const Comp4 = () => {
    const name = useContext(UserContext)
  return (
    <div className='a'>
      <h1>Component 4</h1>
      <h2>{`Bye, ${name}`}</h2>
    </div>
  )
}

export default Comp4
