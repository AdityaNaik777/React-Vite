import React from 'react'
import Men from './Men'
import Women from './Women'
import {Link, Outlet} from "react-router-dom";

const products = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <div className='flex justify-center gap-10 py-4'>
        <Link to='/products/men'>Men</Link>
        <Link to='/products/women'>Women</Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default products