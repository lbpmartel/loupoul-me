exports.createPages = async function ({ actions, graphql }) {
   const { data } = await graphql(`
         query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
               edges {
                  node {
                     frontmatter {
                        slug
                     }
                  id
                  }
               }
            }
         }
      `)

   data.allMdx.edges.forEach(edge => {
      const slug = edge.node.frontmatter.slug;
      const id = edge.node.id;
      actions.createPage({
         path: slug,
         component: require.resolve(`./src/templates/singlePost.js`),
         context: { id },
      })
   })
}