
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  //Crear los archivos

  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

  habitaciones.forEach(habitacion => {
      createPage({
      path: "/habitaciones/" + habitacion.slug,
      component: require.resolve("./src/templates/habitacion.js"),
      context: {
        slug: habitacion.slug
      },
      defer: true,
    })
  });

  
}
