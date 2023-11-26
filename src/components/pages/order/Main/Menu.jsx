import { useState } from "react"
import styled from "styled-components"
import Product from "./Product.jsx"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"
import { theme } from "../../../../theme/index.js"

export default function Menu() {
  const [menu, setmenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {menu.map((produit, index) => (
        <Product
          key={index}
          imageSource={produit.imageSource}
          title={produit.title}
          price={produit.price}
          isAvailable={produit.isAvailable}
          discount={produit.discount}
          discountPercent={produit.discountPercent}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background-color: #e44638;
  background-color: #ff9f1b;
  /* background-color: #2e2e2e; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  /* place-items: center; */
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(300px, 10%));

  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  /* place-content: center; */
  /* width: 100%; */
  /* padding: 50px 90px; */
`
