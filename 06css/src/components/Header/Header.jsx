import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Aditya-Codes</h3>
      {/* styles.btn wont work because we cant access it */}
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header