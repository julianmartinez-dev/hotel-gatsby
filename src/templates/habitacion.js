import * as React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

 
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData
        }
      }
    }
  }
`

const Habitacion = ({data : { allDatoCmsHabitacion : { nodes }}}) => {
  
  const { contenido, imagen, titulo } = nodes[0]

  
  return (
    <Layout>
      <h1
        css={css`
          text-align: center;
          margin-top: 4rem;
        `}
      >{titulo}</h1>
      <Contenido>
        <p>{contenido}</p>
       <GatsbyImage image={imagen.gatsbyImageData} alt={`imagen ${titulo}`} />
      </Contenido>

    </Layout>
  )
}

export default Habitacion
