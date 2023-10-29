import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../reusableUi/Logo"
// import Logo

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  /* background: #474756; */
  /* border: solid 10px white; */
  height: 10vh;
  min-height: 100px;

  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0px 20px;
`
