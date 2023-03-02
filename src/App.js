import "./App.css";
import phrases from "./Components/phrases.json";
import Authors from "./Components/Authors";
import Text from "./Components/Text";
import { useState } from "react";

function App() {
  const backgrounds = [
    "#785964",
    "#6D6875",
    "#B5838D",
    "#E5989B",
    "#7E9680",
    "#C73866",
    "#FFB4A2",
    "#79616F",
    "#EAB595"
  ];

  const [index, setIndex] = useState(0);

  const changephrase = () => {
    setIndex(Math.floor(Math.random() * 8 ))
  
  };

  return (  
    <div className="App" style={{ backgroundColor: backgrounds[index] }}>
      {/* 
      Archivos almacenados en carpeta public 
      <img src="/img-cats/canela.jpeg" alt="Foto de canela" />
      */}

      {/* 
      Archivos guardados en assets  
      <img src={ JunoCat } alt="" />
      */} 
      <Text phrasesData= { phrases[index] } />
      <Authors phrasesData= { phrases[index] } />

      <button onClick={changephrase}>
        Ver Otro
      </button>
    </div>

  );
}

export default App;
