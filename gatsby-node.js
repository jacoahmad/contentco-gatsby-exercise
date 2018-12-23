const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const ArticlePageTemplate = path.resolve(
    'src/templates/techinasia/TechInAsiaTemplate.js'
  )
  graphql(`
    {
      site {
        pathPrefix
      }
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
            pathPrefix: result.data.site.pathPrefix,
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
