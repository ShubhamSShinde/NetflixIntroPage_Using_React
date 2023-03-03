import React, { useState } from 'react'

const Clock = () => {
    let newTime = new Date().toLocaleDateString();

    const [time ,setTime] = useState(newTime);


  const Update = () =>{
    let newTime = new Date().toLocaleDateString();
    setTime(newTime);

  }


  return (
    <>
        <h1>{newTime}</h1>
        <button onClick={Update}>Click me</button>
    </>
  )
}

export default Clock