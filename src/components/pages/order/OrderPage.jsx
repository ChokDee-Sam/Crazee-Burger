import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar"
import Main from "./Main"

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
  background: #746343;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #a23434;
    height: 95vh;
    width: 1440px;
    display: flex;
    flex-direction: column;
  }
`
