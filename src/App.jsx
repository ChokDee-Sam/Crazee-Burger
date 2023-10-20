import { useState } from "react";

function App() {
  // State
  // Je définie un useState, que j'initialise avec une chaine de caractere
  // que je récupère dans une const, que je pourrais modifier uniquement avec son setter
  const [prenom, setPrenom] = useState("Sam");

  // Comportement

  // Render
  return <h1>Bonjour {prenom} </h1>;
}
export default App;
