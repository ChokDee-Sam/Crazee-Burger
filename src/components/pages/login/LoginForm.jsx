import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BiChevronRight } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { theme } from "../../../theme"

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
      {/* <div className="big-title">
        <div>Crazy</div>
        <img src="src/assets/F03 logo-orange.png"></img>
        <div>Burger</div>
      </div> */}

      <h1>Bienvenue chez nous !</h1>
      <div className="line" />

      <div className="bloc-connexion">
        <h2>
          Connectez-vous <FaUserAlt />
        </h2>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>
          Accéder à mon espace <BiChevronRight />
        </button>
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

  h1 {
    margin-top: 40px;

    color: #fff;
    font-family: Amatic SC;
    font-style: normal;
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    text-align: center;
    line-height: 61px; /* 127.083% */
  }

  .line {
    margin-top: ${theme.spacing.lg};
    /* margin-top: 32px; */

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
      font-size: ${theme.fonts.P4};
      font-style: normal;
      font-weight: ${theme.weights.bold};
      line-height: 46px; /* 127.778% */
    }

    input {
      display: inline-flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      /* gap: 12px; */

      padding: 18px 24px;
      border-radius: ${theme.borderRadius.round};
      background: #fff;

      color: #d3d3d3;
      font-family: Arial;
      font-size: ${theme.fonts.P0};
      font-style: normal;
      font-weight: ${theme.weights.regular};
      line-height: 17px; /* 113.333% */

      border: none;
    }

    input::before {
      content: "test";
      background-color: red;
      width: 200px;
      height: 100px;
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

      border-radius: ${theme.borderRadius.round};
      border: 1px solid ${theme.colors.primary_burger};
      background: ${theme.colors.primary_burger};

      color: #fff;
      text-align: center;
      font-family: Arial;
      font-size: ${theme.fonts.P0};
      font-style: normal;
      font-weight: ${theme.weights.bold};
      line-height: 15px; /* 100% */

      transition: all 0.25s;
    }
    button:hover {
      color: ${theme.colors.primary_burger};
      background-color: #fff;
      cursor: pointer;
    }
    button:active {
      color: white;
      background-color: ${theme.colors.primary_burger};
      cursor: pointer;
    }
  }
`
