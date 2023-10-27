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

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/burger-and-fries-background.jpg");
  background-size: cover;
`
