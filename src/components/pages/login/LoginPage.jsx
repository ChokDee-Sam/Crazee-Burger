import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"
import styled from "styled-components"

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* width: 100vw; */
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("src/assets/burger-and-fries-background.jpg");
  background-size: cover;
  background-position: center;

  /* ::before {
    content: "";
    background: url("src/assets/burger-and-fries-background.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  } */
`
