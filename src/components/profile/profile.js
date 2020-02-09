import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

export default function Profile() {
  return (
    <StaticQuery
      query={queryProfile}
      render={data => {
        return (
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <Image
                style={{ top: '-50px' }}
                fixed={data.avatar.childImageSharp.fixed}
              />
            </div>
            <div className={styles.profileSocial}>
              <div className={styles.profileName}>João Gomes</div>
              <div className={styles.profileRole}>Software Developer</div>
              <div className={styles.profileSocialIcons}>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const queryProfile = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 350, height: 375) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
