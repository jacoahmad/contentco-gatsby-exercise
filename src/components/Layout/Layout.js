import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Content from './Content'
import Heading from './Heading'
import Base from './Normalize'
import Header from './Header'
import { Link } from 'gatsby'

const PageLayout = styled.div`
  background: #f7f7f7;
  min-height: 100vh;
`

function Layout({ children }) {
  return (
    <React.Fragment>
      <Base />
      <Header>
        <Header.Content>
          <Link to={'/'}>
            <Header.Logo>{'The Articles'}</Header.Logo>
          </Link>
        </Header.Content>
      </Header>
      <PageLayout>{children}</PageLayout>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.Content = Content
Layout.Heading = Heading

export default Layout
