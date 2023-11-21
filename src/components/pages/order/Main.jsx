import styled from "styled-components"
import { theme } from "../../../theme"

export default function Main() {
  return <MainStyled className="main">MAIN</MainStyled>
}

const MainStyled = styled.div`
  /* background: #73b7e1; */
  background-color: ${theme.colors.background_white};
  flex: 1;
  /* height: calc(95vh-10vh) ;*/

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  /* border-radius: 0px 0px 15px 15px; */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
/* grid-template-columns: 50px 1fr 1fr 1fr 50px;  */