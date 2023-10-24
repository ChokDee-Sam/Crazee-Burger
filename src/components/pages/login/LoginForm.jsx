import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // 1. State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // 2. Comportement
  const handleChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  // 3. Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={inputValue}
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
