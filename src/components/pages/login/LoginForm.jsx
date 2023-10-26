import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
// import { theme } from "../../../theme"

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
      <div className="big-title">
        <div>Crazy</div>
        <img src="src/assets/F03 logo-orange.png"></img>
        <div>Burger</div>
      </div>

      <h1>Bienvenue chez nous !</h1>
      <div className="line" />

      <div className="bloc-connexion">
        <h2>Connectez-vous</h2>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Accéder à mon espace</button>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 464px; */

  color: white;

  .big-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    color: #ffa01b;
    font-family: Amatic SC;
    font-style: normal;
    font-size: 110px;
    font-weight: 700;
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
  }

  h1 {
    margin-top: 40px;

    color: #fff;
    font-family: Amatic SC;
    font-style: normal;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    line-height: 61px; /* 127.083% */
  }

  .line {
    margin-top: 32px;

    width: 400px;
    height: 3px;
    flex-shrink: 0;
    border: 1px solid #f56a2c;
    background-color: #f56a2c;
  }

  .bloc-connexion {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 400px;

    h2 {
      color: #fff;
      text-align: center;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 46px; /* 127.778% */
    }

    input {
      display: inline-flex;
      align-items: center;
      gap: 12px;

      padding: 18px 24px;
      border-radius: 5px;
      background: #fff;

      color: #d3d3d3;
      font-family: Arial;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px; /* 113.333% */

      border: none;
    }
    input:focus {
      outline: none;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-shrink: 0;
      /* gap: 9.8px; */
      /* height: 53px; */
      padding: 18px;

      border-radius: 5px;
      border: 1px solid #ff9f1b;
      background: #ff9f1b;

      color: #fff;
      text-align: center;
      font-family: Arial;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 15px; /* 100% */

      transition: all 0.25s;
    }
    button:hover {
      color: #ff9f1b;
      background-color: #fff;
      cursor: pointer;
    }
    button:active {
      color: white;
      background-color: #ff9f1b;
      cursor: pointer;
    }
  }
`
