import React from 'react'
import styles from './resume.module.css'

// Components
import Layout from '../components/layout/layout'
import Title from '../components/title/title'
import Experience from '../components/experience/experience'
import JSONData from '../../content/experience/experience.json'

export default function Resume() {
  return (
    <Layout>
      <Title title="Resume" />
      <div className={styles.resume}></div>
      {JSONData.content.map((data, key) => {
        return <Experience data={data} key={key} />
      })}
    </Layout>
  )
}
