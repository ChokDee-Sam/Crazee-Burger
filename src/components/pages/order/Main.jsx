import styled from "styled-components"

export default function Main() {
  return <MainStyled className="main">MAIN</MainStyled>
}

const MainStyled = styled.div`
  background: #73b7e1;
  border: solid 10px white;
  /* height: calc(95vh-10vh) ;*/
  flex: 1;
`
