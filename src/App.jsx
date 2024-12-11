import React from 'react'
import Pictures from './lists-map/Pictures'
import CompA from './props/CompA'
import Usestate from './hooks/Usestate'
import UseEffect from './hooks/UseEffect'
import UseRef from './hooks/UseRef'
import UserProvider from './Context-Api/Context'
import Comp1 from './Context-Api/Comp1'

const App = () => {
  return (
    <UserProvider>
    <div>
      {/* <Pictures/> */}
      {/* <CompA/> */}
      {/* <Usestate/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      <Comp1/>
    </div>
    </UserProvider>
  )
}

export default App
