import React from 'react'
import Title from '../title/title'

import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <Title title="About me" />
      <div className={styles.aboutContent}>
        <p>
          I'm a dedicated and self-motivated software developer with a genuine
          enthusiasm for seeing project success and overcoming a wide variety of
          coding challenges. I am passionate about web technologies and their
          application to create effective, engaging and enjoyable solutions.
        </p>
        <p>
          {' '}
          I have a thirst for knowledge and a strong drive for self-advancement
          and thus ensure that I keep abreast of the latest developments and
          emerging trends in software development.{' '}
        </p>
        <p>
          In my 7 years'​ as a software developer I worked with technologies
          such Javascript, Angular/AngularJS, TypeScript, Redux, NgRx, RxJS,
          HTML5, CSS3, PHP, Apex, Salesforce, Java, MySQL,
          WebServices(SOAP/REST).
        </p>
        <h2>Tech</h2>
        <ul className={styles.aboutList}>
          <li>
            Javascript (ES6/ES7), TypeScript, NodeJS, PHP, Apex, Java, HTML5,
            CSS3 (SASS, LESS)
          </li>
          <li>
            Highly proficient with Angular 8.x.x, AngularJS, Redux, NgRx, RxJS
          </li>
          <li>Karma/Jasmine for unit testing</li>
          <li> Experience with build tools like WebPack, Rollup, Grunt</li>
          <li>Experience with Bootstrap, Material Design, Foundation</li>
          <li> Solid knowledge of design patterns</li>
          <li>
            {' '}
            Experience with backend frameworks such as Codeigniter and Laravel
          </li>
          <li>Web Services (SOAP, REST)</li>
          <li>Experience with MySQL databases</li>
          <li>Solid knowledge of Salesforce CRM</li>
          <li> Cross-browser testing and development</li>
          <li> Experience with GIT source control</li>
          <li>
            Good understanding of web standards and mindful of SEO best
            practices
          </li>
          <li> Continuous Integration (TeamCity/Jenkins)</li>
          <li>Agile/SCRUM</li>
        </ul>
        <h2>Soft Skills:</h2>
        <ul className={styles.aboutList}>
          <li> Responsibility, organisation</li>
          <li> Communication, team player</li>
          <li> Customer focus and result orientation</li>
          <li> Autonomy and critical attitude </li>
          <li>Agile/SCRUM</li>
        </ul>
      </div>
    </div>
  )
}
