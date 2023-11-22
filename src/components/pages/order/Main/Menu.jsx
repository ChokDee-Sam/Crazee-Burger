import { useState } from "react"
import styled from "styled-components"
import Card from "./Card.jsx"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"
import { theme } from "../../../../theme/index.js"

export default function Menu() {
  const [menu, setmenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      <Card menu={menu} />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  /* background-color: #c489c4; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(auto-fit, minmax(180px, 10%)); */
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  /* place-items: center; */

  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  /* place-content: center; */
  /* width: 100%; */
  /* padding: 50px 90px; */
`
