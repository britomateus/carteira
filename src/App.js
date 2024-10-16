import "./App.css";
import Carteira from "./carteira.component";
import fotoMateus from "./foto-mateus.jpeg";

function App() {
  return (
    <div className="App">
      <Carteira
        nome="MATEUS MEDEIROS DE ASSIS BRITO"
        curso="Bacharelado em Engenharia da Computação"
        rg="003036166"
        dataNasc="04/12/1997"
        foto={fotoMateus}
      />
    </div>
  );
}

export default App;
