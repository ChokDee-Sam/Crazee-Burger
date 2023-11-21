import styled from "styled-components"
import { theme } from "../../../theme"
import Boxes from "./Boxes"

export default function Main() {
  return (
    <MainStyled className="main">
      <Boxes />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; */
  width: 100%;
  /* margin: 0 auto; */

  /* height: calc(95vh-10vh); */
  /* background: #73b7e1; */

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
