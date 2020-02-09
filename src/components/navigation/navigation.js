import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faBlog } from '@fortawesome/free-solid-svg-icons'

import styles from './navigation.module.css'

// Component
import { NavigationLink } from './navigationLink'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationItem}>
        <NavigationLink to="/">
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className={styles.title}>About</span>
        </NavigationLink>
      </div>
      <div className={styles.navigationItem}>
        <NavigationLink to="/resume">
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faFile} />
          </span>
          <span className={styles.title}>Resume</span>
        </NavigationLink>
      </div>
      <div className={styles.navigationItem}>
        <NavigationLink to="/blog">
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faBlog} />
          </span>
          <span className={styles.title}>Blog</span>
        </NavigationLink>
      </div>
    </nav>
  )
}
