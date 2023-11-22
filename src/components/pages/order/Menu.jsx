import styled from "styled-components"
import Card from "./Card.jsx"

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(180px, 10%));
  /* grid-template-rows: auto; */

  place-content: center;
  width: 100%;
  row-gap: 60px;
  column-gap: 90px;
  place-items: center;
  padding: 50px 90px;
`
