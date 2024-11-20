import "./App.css";
import Carteira from "./carteira.component";
import fotoJanis from "./foto-janis.jpeg";

function App() {
  return (
    <div className="App">
      <Carteira
        nome="JANIELY KELLY SILVA PEREIRA"
        curso="Bacharelado em Engenharia Biomédica"
        rg="003.112.198"
        dataNasc="12/05/1997"
        foto={fotoJanis}
      />
    </div>
  );
}

export default App;
