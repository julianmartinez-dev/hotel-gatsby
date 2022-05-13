import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;

const TextImage = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63, .75), rgba(34,49,63,.75) );
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    h1{
        font-size: 3rem;
        margin: 0;
        
        @media (min-width:768px){
            font-size: 5.8rem;
        }
    }
    p{
        font-size: 2rem;
        @media (min-width:768px){
            font-size: 2.8rem;
        }
    }
`

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "8.jpg" }) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)


  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextImage>
            <h1>Bienvenido a Hotel Gatsby</h1>
            <p>El mejor hotel para vacacionar</p>
        </TextImage>
    </ImageBackground>
  )
}

export default ImagenHotel