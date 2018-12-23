import React from 'react'
import moment from 'moment'
import convert from 'htmr'
import Helmet from 'react-helmet'
import Article from '../../components/Article/Article'
import Layout from '../../components/Layout/Layout'

export default function TechInAsiaTemplate(props) {
  const {
    pageContext: { post },
  } = props
  const { Content } = Article
  return (
    <React.Fragment>
      <Helmet defaultTitle={post.Title}>
        <title>{post.title}</title>
        <meta property="og:image" content={post.seo.image} />
        <meta property="og:title" content={post.seo.title} />
        <meta property="og:description" content={post.seo.description} />
      </Helmet>
      <Layout>
        <Layout.Content>
          <Article>
            <Content>
              <Content.Hero src={post.featured_image.source} />
              <Content.Flex>
                <Content.Spacer />
                <Content.Item>
                  <Content.Title>{post.title}</Content.Title>
                </Content.Item>
              </Content.Flex>
              <Content.Flex>
                <Content.Spacer>
                  {moment(post.date_gmt).format('MMM DD, YYYY')}
                </Content.Spacer>
                <Content.Item>
                  <Content.Paragraph>{convert(post.content)}</Content.Paragraph>
                </Content.Item>
              </Content.Flex>
            </Content>
          </Article>
        </Layout.Content>
      </Layout>
    </React.Fragment>
  )
}
