import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Title from '../components/title/title'
import DateFormat from '../components/date-format/date-format'
import { rhythm } from '../utils/typography'

export default function Blog(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Title title="Blog" />
      <div style={{ marginTop: `20px` }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Link
                style={{
                  boxShadow: `none`,
                  display: `block`,
                  color: `#78cc6d`,
                }}
                to={`blog${node.fields.slug}`}
              >
                {title}
              </Link>
              <DateFormat date={node.frontmatter.date} />
              <p
                style={{
                  color: `#646464`,
                  fontSize: `12px`,
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
