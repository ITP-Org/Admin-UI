import { useState } from 'react'
import './App.css'
import Adminui from './ui';
import Cal from './calender';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Adminui/>
     <Cal/>

    </>
  )
}

export default App
