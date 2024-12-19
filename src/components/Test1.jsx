import React, { useEffect } from 'react'

function Test1() {
  useEffect(() => {
    console.log("hello");
    
  
    return () => {
      console.log("bye....");
    }
  }, [])
  
  
  return (
    <>
      <h2>this is test 1</h2>
    </>
  )
}

export default Test1