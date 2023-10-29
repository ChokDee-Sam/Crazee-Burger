import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { BiChevronRight } from "react-icons/bi"
import { theme } from "../../../theme"
import TextInput from "../../reusableUi/TextInput"
import PrimaryButton from "../../reusableUi/PrimaryButton"

export default function LoginForm() {
  // 1. State
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  // 2. Comportement
  const handleChange = (event) => {
    setInputValue(() => event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }

  // 3. Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>

      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle className="icon red" />}
      />

      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<BiChevronRight className="icon red" />}
      />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;

  margin-top: 40px;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: Amatic SC;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.spacing.lg};
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
    margin-bottom: ${theme.spacing.lg};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`
