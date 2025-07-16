import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Carteira from "./carteira.component";
import { pessoas } from "./pessoas";

function App() {
  return (
    <Router basename="/carteira">
      <div className="App">
        <Routes>
          {/* Rota padrão redireciona para janiely */}
          <Route path="/" element={<Navigate to="/janiely" replace />} />
          
          {/* Rotas para cada pessoa */}
          <Route path="/janiely" element={
            <Carteira
              nome={pessoas.janiely.nome}
              curso={pessoas.janiely.curso}
              rg={pessoas.janiely.rg}
              dataNasc={pessoas.janiely.dataNasc}
              foto={pessoas.janiely.foto}
            />
          } />
          
          <Route path="/mateus" element={
            <Carteira
              nome={pessoas.mateus.nome}
              curso={pessoas.mateus.curso}
              rg={pessoas.mateus.rg}
              dataNasc={pessoas.mateus.dataNasc}
              foto={pessoas.mateus.foto}
            />
          } />
          
          <Route path="/valeria" element={
            <Carteira
              nome={pessoas.valeria.nome}
              curso={pessoas.valeria.curso}
              rg={pessoas.valeria.rg}
              dataNasc={pessoas.valeria.dataNasc}
              foto={pessoas.valeria.foto}
            />
          } />
          
          {/* Rota 404 para pessoas não encontradas */}
          <Route path="*" element={<Navigate to="/janiely" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
