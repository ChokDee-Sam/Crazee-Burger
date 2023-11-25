import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

import { theme } from "../../../theme"
import Main from "./Main/Main.jsx"
import Navbar from "./Navbar/Navbar.jsx"

export default function OrderPage() {
  // State
  const { username } = useParams()

  // Comportement

  // Affichage
  return (
    <OrderPageStyled>
      <div className="container"> 
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: ${theme.borderRadius.extraRound};

  /* padding: 5vh 0; */
  background-color: ${theme.colors.primary};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 600px;
    width: calc(100vw - 10vw);
    max-width: 1400px;

    /* border-bottom-radius: ${theme.borderRadius.extraRound}; */

    height: 90vh;
    /* width: 1440px; */
  }
`
