import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params=useParams()
  console.log(params);
  
  return (
    <div className='w-screen h-screen bg-black'>
      <h1>{params.id} CourseDetail Page</h1>
    </div>
  )
}

export default CourseDetail