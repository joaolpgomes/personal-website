import React from 'react'

// Components
import Layout from '../components/layout/layout'
import About from '../components/about/about'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <About />
      </Layout>
    )
  }
}

export default IndexPage
