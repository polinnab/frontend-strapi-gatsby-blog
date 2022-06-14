const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }
}

// exports.createSchemaCustomization = ({ actions }) => {
//   actions.createTypes(`
//   type STRAPI__COMPONENT_SHARED_MEDIAFile implements Node {
//       id: ID!
//       localFile: [LocalFile!]
//   }
//   type STRAPI__COMPONENT_SHARED_SLIDERFiles implements Node {
//     id: ID!
//     localFile: [LocalFile!]
//   }
//   type STRAPI_ARTICLECover implements Node {
//     id: ID!
//     localFile: [LocalFile!]
//   }
//   type STRAPI_GLOBALFavicon implements Node {
//     id: ID!
//     localFile: [LocalFile!]
//   }
//   type STRAPI__COMPONENT_SHARED_SEOShareImage implements Node {
//     id: ID!
//     localFile: [LocalFile!]
//   }
//   type LocalFile {
//     url: [String!]
//     childImageSharp: [ChildImageSharp!]!
//   }
//   type ChildImageSharp {
//     gatsbyImageData: [GatsbyImageDataCust!]!
//   }
//   type GatsbyImageDataCust {
//     id: ID!
//     aspectRatio: Int!
//   }
//   `)
// }