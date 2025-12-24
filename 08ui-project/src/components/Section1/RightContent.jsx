import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className="h-full w-3/5 p-6 flex flex-nowrap gap-10 overflow-x-auto">

    {props.users.map(function(ele) {
      return <RightCard img={ele.img}/>
    })}
    </div>
  )
}

export default RightContent