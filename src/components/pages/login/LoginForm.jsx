import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { BiChevronRight } from "react-icons/bi"
import { theme } from "../../../theme"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

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
    <FormStyled action="submit" onSubmit={handleSubmit}>
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
    </FormStyled>
  )
}

const FormStyled = styled.form`
  margin-top: 50px;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  /* margin: 0px auto; */
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: Amatic SC;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: #fff;
    font-size: ${theme.fonts.P5};
    margin-bottom: 40px;
  }

  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`
