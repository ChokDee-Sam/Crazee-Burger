import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      NAVBAR
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Se déconnecter</button>
      </Link>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: #474756;
  border: solid 10px white;
  height: 10vh;
`
