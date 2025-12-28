import React from 'react'


const Navbar = (props) => {
  props.setTheme('dark');
  
  return (
    <div>
      <h1>Theme changes to {props.theme}</h1>
    </div>
  )
}

export default Navbar