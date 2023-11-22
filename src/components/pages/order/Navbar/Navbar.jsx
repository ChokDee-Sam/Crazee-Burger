import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../../reusableUi/Logo"
import { theme } from "../../../../theme"
import { refreshPage } from "../../../../utils/window"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"logo-order-page"} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  height: 10vh;
  min-height: 100px;
  padding: 0px 70px;
  /* padding: 0px 20px; */

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};

  .logo-order-page {
    cursor: pointer;
  }
`
