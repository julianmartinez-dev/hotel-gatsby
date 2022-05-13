import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, 0.85);
    width: 100%;
    color: #FFF;
    text-decoration: none;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const HabitacionPreview = ({datos}) => {
    const { contenido, imagen, titulo , slug } = datos;
  return (
    <div
        css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}
    >
        <GatsbyImage image={imagen.gatsbyImageData} alt={`imagen ${titulo}`}/>
        <div
            css={css`
                padding: 3rem;
            `}
        >
            <h3
                css={css`
                    font-size: 3rem;
                `}
            >{titulo}</h3>
            <p>{contenido.slice(0,250)+'...'}</p>
            <Boton to={`/habitaciones/${slug}`}>Ver Habitación</Boton>
        </div>
    </div>
  )
}

export default HabitacionPreview