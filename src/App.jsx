import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [backColor, setBackColor] = useState("")

  
  const handleClick = ()=>{
    if(backColor === "__alt"){
      setBackColor("")
    }else{
       setBackColor("__alt")
    }

    console.log(backColor)
   
  }
  
  return (
    
   <>
   <main>
    <Card classe={backColor}/>
  <button onClick={handleClick}>Gerar background</button>
   </main>
  
  </>
  )
}

export default App
