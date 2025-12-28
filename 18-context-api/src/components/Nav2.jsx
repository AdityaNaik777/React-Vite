import {useContext} from 'react'
import {ThemeDataContext} from '../context/ThemeContext'
const Nav2 = () => {
  
    const {theme,setTheme}=useContext(ThemeDataContext)
    console.log(theme);
  return (
    <div className={`nav2 ${theme}`} onClick={()=>setTheme(prev=>prev==='light'?'dark':'light')}>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <button className={theme}>
        Change Theme
      </button>
    </div>
  )
}

export default Nav2