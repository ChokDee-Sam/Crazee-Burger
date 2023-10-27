import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo() {
  return (
    <LogoStyled className="big">
      <div>Crazy</div>
      <img src="src/assets/logo-crazy-burger.png" alt="logo"></img>
      <div>Burger</div>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.md};

  color: ${theme.colors.primary};
  /* color: #ffa01b; */
  font-family: Amatic SC;
  font-style: normal;
  font-size: 110px;
  font-weight: ${theme.weights.bold};
  text-align: center;
  line-height: 115px; /* 104.545% */
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 200px;
    height: 150px;
    flex-shrink: 0;
  }
`
