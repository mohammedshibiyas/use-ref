import { useRef} from 'react'

import './App.css'



function App() {
  const inp1=useRef()
  const inp2=useRef()

  const access=()=>{
    console.log(inp1.current.value);
    console.log(inp2.current.value);
  }

  return (
    <>
      <input type="text" ref={inp1} name="" id="" placeholder='name'/>
      <input type="text" ref={inp2} name="" id="" placeholder='email'/>
      <button onClick={access}>Click</button>
    </>
  )
}

export default App
