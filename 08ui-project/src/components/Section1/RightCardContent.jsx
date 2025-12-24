import React from 'react'
import { MoveRight } from 'lucide-react'

const RIghtCardContent = () => {
  return (
      <div className='h-full w-full absolute top-0 left-0 p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>1</h2>
        <div >
          <p className='text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, in!</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-black font-medium px-3 py-2 rounded-full'>Satisfied</button>
            <MoveRight className='mt-2'/>
          </div>
        </div>
      </div>
  )
}

export default RIghtCardContent