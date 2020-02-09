import React from 'react'

// Components
import Navigation from '../navigation/navigation'
import Profile from '../profile/profile'

// CSS
import styles from './layout.module.css'

export default ({ children }) => (
  <div className={styles.container}>
    <Navigation />
    <Profile />
    <div className={styles.page}>{children}</div>
  </div>
)
