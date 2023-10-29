import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">LEFT</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: #474756;
  border: solid 10px white;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .left-side {
    background: grey;
    border: 1px dashed white;
  }
`
