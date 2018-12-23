import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import moment from 'moment'

const SORT = {
  DATE_ASCENDING: { label: 'Newest', value: 'date_ascending' },
  DATE_DESCENDING: { label: 'Oldest', value: 'date_descending' },
}
class ArticleListPage extends React.Component {
  state = {
    sortBy: SORT.DATE_ASCENDING.value,
  }
  handleClickArticle = slug => () => {
    return navigate(`/article/${slug}`)
  }
  handleSortChange = e => this.setState({ sortBy: e.target.value })
  renderListItem = (posts, key) => {
    const { Card } = Article

    const data = posts.sort((a, b) => {
      switch (this.state.sortBy) {
        case SORT.DATE_ASCENDING.value:
          return new Date(b.date_gmt) - new Date(a.date_gmt)
        case SORT.DATE_DESCENDING.value:
          return new Date(a.date_gmt) - new Date(b.date_gmt)
        default:
          // Default to ascending
          return new Date(b.date_gmt) - new Date(a.date_gmt)
      }
    })
    return (
      <React.Fragment key={key}>
        {data.map(post => {
          return (
            <div key={post.slug}>
              <Article>
                <Card>
                  <Card.Image
                    src={post.featured_image.source}
                    onClick={this.handleClickArticle(post.slug)}
                  />
                  <Card.Content>
                    <Card.Content.Heading
                      onClick={this.handleClickArticle(post.slug)}
                    >
                      {post.title}
                    </Card.Content.Heading>
                    <Card.Content.Paragraph>
                      {post.excerpt}
                    </Card.Content.Paragraph>
                    <Card.Content.Footer>
                      {moment(post.date_gmt).fromNow()}
                    </Card.Content.Footer>
                  </Card.Content>
                </Card>
              </Article>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
  renderList = () => {
    const { allTechInAsiaPosts: data } = this.props.data
    return (
      <React.Fragment>
        {data.edges.map(item => {
          if (!item.node.posts) {
            return null
          }
          return this.renderListItem(item.node.posts, item.node.id)
        })}
      </React.Fragment>
    )
  }
  render() {
    return (
      <Layout>
        <Layout.Content>
          <Layout.Heading>{'Article List'}</Layout.Heading>
          <select value={this.state.sortBy} onChange={this.handleSortChange}>
            {Object.keys(SORT).map(key => {
              return (
                <option key={SORT[key].value} value={SORT[key].value}>
                  {`Sort by ${SORT[key].label}`}
                </option>
              )
            })}
          </select>
          {this.renderList()}
        </Layout.Content>
      </Layout>
    )
  }
}

ArticleListPage.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string,
              slug: PropTypes.string,
              excerpt: PropTypes.string,
              date_gmt: PropTypes.string,
              featured_image: PropTypes.shape({
                source: PropTypes.string,
              }),
              seo: PropTypes.shape({
                image: PropTypes.string,
              }),
            })
          ),
        }),
      })
    ),
  }),
}

export const pageQuery = graphql`
  query PostsQuery {
    allTechInAsiaPosts {
      edges {
        node {
          id
          posts {
            title
            slug
            date_gmt
            excerpt
            featured_image {
              source
            }
            seo {
              image
            }
          }
        }
      }
    }
  }
`

export default ArticleListPage
