import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setcounter]=useState(0)
  //above we use useState hooks it give one parameter counter and one method setcounter
  //using hooks we can change all state by clicking one button here counter are changes
  const addvalue = ()=>{
    if(counter<10){
      setcounter(counter+1)
    }
  }

  const removevalue =() =>{
    if(counter>0){
    setcounter(counter-1)
    }
  }
  return (
    <>
      <h1>We have learn basic about hooks</h1>
      <button onClick={addvalue}>Add Value{counter}</button>
      <button onClick={removevalue}>Remove Value{counter}</button>
    </>
  )
}

export default App


//In React, "hooks" are functions that let you use state and other React features without writing a class. They are introduced in React 16.8 as a way to write more expressive and concise React components. Hooks allow you to reuse stateful logic across different components without changing their structure into classes.
