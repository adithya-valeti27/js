import React from 'react'
import Comp3 from './Comp3'
import { UserContext } from './Context';
import { useContext } from 'react';

const Comp2 = () => {
    const userName = useContext(UserContext);

  return (
    <div className='a'>
      <h1>Component 2</h1>
      <h2>Hey, {userName}</h2>
      <Comp3/>
    </div>
  )
}

export default Comp2
