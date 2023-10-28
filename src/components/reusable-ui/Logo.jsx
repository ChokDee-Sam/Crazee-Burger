import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo() {
  return (
    <LogoStyled className="big">
      <h1>Crazy</h1>
      <img
        src="src/assets/logo-crazy-burger.png"
        alt="logo crazee burger"
      ></img>
      <h1> Burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  transform: scale(2.5);
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  h1 {
    text-align: center;

    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-family: Amatic SC;
    font-style: normal;
    font-weight: ${theme.weights.bold};
    font-size: 36px;
    line-height: 1em;

    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 5px;
  }
`
