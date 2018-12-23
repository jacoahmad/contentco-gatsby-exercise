const path = require('path')

const TECH_IN_ASIA_POSTS = 'techInAsia__posts'

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === TECH_IN_ASIA_POSTS) {
    // const fileNode = getNode(node.parent)
    // console.log(`\n`, fileNode.relativePath)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const ArticlePageTemplate = path.resolve(
    'src/templates/techinasia/TechInAsiaTemplate.js'
  )
  // TODO: Create Template for REST API Articles
  graphql(`
    {
      allTechInAsiaPosts {
        edges {
          node {
            posts {
              alternative_id
              date_gmt
              modified_gmt
              title
              slug
              status
              type
              link
              content
              excerpt
              editor
              featured_image {
                source
              }
              comment_status
              comments_count
              is_sponsored
              is_partnership
              show_ads
              is_subscriber_exclusive
              is_paywalled
              read_time
              seo {
                title
                description
                image
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allTechInAsiaPosts.edges.forEach(({ node }) => {
      if (node.posts != null && node.id !== 'dummy') {
        node.posts.forEach(post => {
          createPage({
            path: `/article/${post.slug}`,
            component: ArticlePageTemplate,
            context: {
              post,
            },
          })
        })
      }
      return
    })
  })
}
