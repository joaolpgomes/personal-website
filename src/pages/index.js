import React from 'react'

// Components
import Layout from '../components/layout/layout'
import Title from '../components/title/title'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Title title="About me" />
      </Layout>
    )
  }
}

export default IndexPage
