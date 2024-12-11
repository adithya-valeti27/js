import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [user, setUser] = useState("Adithya");
  useEffect(() => {
    
      document.title = user;
   
  }, []);
  return (
    <div>
      <button onClick={()=>{}}>click</button>
    </div>
  );
};

export default UseEffect;
