import styled from "styled-components"
import Card from "./Card.jsx"

export default function Cards() {
  return (
    <CardsStyled>
      <Card />
    </CardsStyled>
  )
}

const CardsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(140px, 20%)); */
  /* grid-template-rows: auto; */
  width: 100%;
  row-gap: 60px;
  column-gap: 90px;
  place-items: center;
`
