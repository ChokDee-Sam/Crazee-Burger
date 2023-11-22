import styled from "styled-components"
import { theme } from "../../../theme"
import Menu from "./Menu"
import Basket from "./Basket"

export default function Main() {
  return (
    <MainStyled className="main">
      <Basket />
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  flex: 1;

  height: calc(95vh-10vh);
  /* padding: 50px 90px; */

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background-color: ${theme.colors.background_white};
`
