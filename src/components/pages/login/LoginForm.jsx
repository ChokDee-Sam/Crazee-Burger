import { useState } from "react";

export default function LoginForm() {
  // 1. State
  const [nom, setNom] = useState("");

  // 2. Comportement
  const handleChange = (event) => {
    setNom(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${nom}`);
    setNom("");
  };

  // 3. Affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>BIENVENUE CHEZ NOUS</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={nom}
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
