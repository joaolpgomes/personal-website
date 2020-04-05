import React from 'react'
import styles from './experience.module.css'

export default function Experience(props) {
  return (
    <div>
      <div className={styles.experience}>
        <div className={styles.date}>{props.data.date}</div>
        <div className={styles.role}>{props.data.role}</div>
        <div className={styles.company}>{props.data.company}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: props.data.description,
          }}
        />
      </div>
    </div>
  )
}
