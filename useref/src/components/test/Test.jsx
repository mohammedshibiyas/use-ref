import { useState,memo } from 'react'




function Test() {
  const [child, setChild] = useState(0)

  console.log("child",child);

  return (
    <>
    <button onClick={()=>{setChild(child+1)}}>child {child}</button>
    
    </>
  )
}

export default memo(Test)
