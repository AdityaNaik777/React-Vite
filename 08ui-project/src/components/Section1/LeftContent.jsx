import React from 'react'

import Herotext from './Herotext'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className=' flex flex-col justify-between h-full w-2/5'>
      <Herotext/>
      <Arrow/>
    </div>
  )
}

export default LeftContent