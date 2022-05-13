import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Navegacion from "./nav"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: #222;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <EnlaceHome to="/">
          <h1>Gatsby Hotel</h1>
        </EnlaceHome>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
