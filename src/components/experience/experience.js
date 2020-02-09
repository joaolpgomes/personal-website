import React from 'react'
import styles from './experience.module.css'

export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.date}>Jul 2018 - Present</div>
      <div className={styles.role}>Principal Software Engineer</div>
      <div className={styles.company}>Sage People</div>
      <div className={styles.description}>
        <p>
          I'm responsible for leading a team of 7 people (4 developers, 2QA and
          UX) developing a new vertical of the HCM product.{' '}
        </p>
        <p>
          Architecture and development of single-page applications with
          JavaScript, TypeScript, Angular (8.x.x), NgRx/Redux, CSS/SASS, HTML5.
          Design and development of API applications with Node.js and Salesforce
          (Apex).
        </p>
        Use of Jenkins for continuous integration. Worked closely with product
        owners to define and track deliverables on the roadmap.
      </div>
    </div>
  )
}
