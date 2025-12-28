import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
  let navigate=useNavigate()

  return (
    <div className='py-3 px-5 bg-cyan-500'>
      <button onClick={()=>{
        navigate('/')
      }}className=' active:scale-90 px-1 py-3 bg-emerald-500 '>Return to HomePage</button>
      <button onClick={()=>{
        navigate(-1)
      }} className=' active:scale-90 px-1 py-3 m-2 bg-emerald-500 '>Return to HomePage</button>
      <button onClick={()=>{
        navigate(+1)
      }} className=' active:scale-90 px-1 py-3 m-2 bg-emerald-500 '>Next</button>
    </div>
  )
}

export default Navbar2