import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const users=[
  {
    img:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Satisfied"
  },
  {
    img:"https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Unsatisifed"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1664474970286-2c05f8adf9fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    intro:"",
    tag:"Satisfied"
  },
  {
    img:"https://images.unsplash.com/photo-1752170080622-18196de87763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Satisfied"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1661636590929-f8ea7c106a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:"",
    tag:"Satisfied"
  }

]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App