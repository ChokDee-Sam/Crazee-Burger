import LoginForm from "./LoginForm"
import styled from "styled-components"

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/F03 burger-background.jpg");
  background-size: cover;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
`
