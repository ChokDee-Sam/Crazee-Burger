import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar"
import Main from "./Main"
import { theme } from "../../../theme"

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
  background: ${theme.colors.primary};

  .container {
    display: flex;
    flex-direction: column;

    height: 95vh;
    width: 1440px;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
