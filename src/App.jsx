import { useState } from "react";

function App() {
  // State
  // Je définie un useState, que j'initialise avec une chaine de caractere
  // que je récupère dans une const, que je pourrais modifier uniquement avec son setter
  const [prenom, setPrenom] = useState("Mister");

  // Comportement
  const handleClick = () => alert("Have a good day " + prenom);

  // Affichage (render)
  return (
    <div>
      <h1>Hello {prenom} </h1>
      <button onClick={handleClick}>Hey</button>
    </div>
  );
}
export default App;
