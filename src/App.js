import "./App.css";
import { Route, Routes } from "react-router-dom";
import Carteira from "./carteira.component";
import fotoMateus from "./foto-mateus.jpeg";
import fotoVal from "./foto-val.jpeg";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Carteira
              nome="MATEUS MEDEIROS DE ASSIS BRITO"
              curso="Bacharelado em Engenharia da Computação"
              rg="003036166"
              dataNasc="04/12/1997"
              foto={fotoMateus}
            />
          }
        />
        <Route
          path="/val"
          element={
            <Carteira
              nome="VALERIA GUIMARÃES FLORO"
              curso="Bacharelado em Engenharia Biomédica"
              rg="003461355"
              dataNasc="17/11/1994"
              foto={fotoVal}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
