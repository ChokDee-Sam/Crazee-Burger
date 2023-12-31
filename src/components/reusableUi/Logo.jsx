import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Crazy</h1>
      <img src="/images/logo-crazy-burger.png" alt="logo crazee burger"></img>

      <h1> Burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};

    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    font-family: Amatic SC;

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
