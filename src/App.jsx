import React, { useEffect, useState } from 'react'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import State from './components/State'

function App() {
  const [count,setCount] = useState(0);
  const [isactive,setActive] = useState(true);
  const loc='surat';
  
  const countHandler=()=>{(
    setCount(count+1)
  )}

  useEffect(()=>{
    console.log("mount"+count);

    return()=>{
      console.log("unmount.."+count);
    }
  },[count]);

  return (
    <>
      <p>counter: {count}</p>
      <button onClick={countHandler}>increment</button>
      { isactive ? <Test1/> : <Test2/>}
      <button onClick={()=> setActive(!isactive)}>change</button>
      <hr></hr>
      <h2>
      <State loc={loc}/>
      </h2>

    </>
  )
}
export default App