import React from 'react'
import styles from './data-format.module.css'

export default function DateFormat(props) {
  return <div className={styles.date}>{props.date}</div>
}
