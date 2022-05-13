import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
      query {
        allDatoCmsHabitacion {
          nodes {
            contenido
            titulo
            id
            slug
            imagen {
              gatsbyImageData
            }
          }
        }
      }
    `)
            
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        imagen: habitacion.imagen,
        id: habitacion.id
    }))
}
 
export default useHabitaciones;