import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Se déconnecter</button>
      </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  background: grey;
  border: 1px dashed white;
`
