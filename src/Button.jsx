import React from 'react'

const Button = () => {

    const handleClick = () =>{
        console.log("I got clicked");
        
    }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button
