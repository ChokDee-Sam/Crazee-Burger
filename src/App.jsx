import { useState } from "react";

function App() {
  // State
  // Je définie un useState, que j'initialise avec une chaine de caractere
  // que je récupère dans une const, que je pourrais modifier uniquement avec son setter
  const [prenom, setPrenom] = useState("Mister");

  // Comportement
  const handleClick = () => alert("Have a good day " + prenom);

  // Render
  return <div></div>;
}
export default App;
