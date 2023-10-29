import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function OrderPage() {
  // State
  const { username } = useParams()

  // Comportement

  // Affichage
  return (
    <OrderPageStyled>
      <div className="container">
        {/* Navbar */}

        <div className="navbar">
          NAVBAR
          <h1>Bonjour {username}</h1>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>

        {/* Main */}
        <div className="main">MAIN</div>
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
    background: red;
    height: 95vh;
    width: 1440px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: #474756;
      border: solid 10px white;
      height: 10vh;
    }
    .main {
      background: #73b7e1;
      border: solid 10px white;
      /* height: calc(95vh-10vh) ;*/
      flex: 1;
    }
  }
`
