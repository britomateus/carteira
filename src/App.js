import './App.css';
import foto from './foto-mateus.jpeg'; // Tell webpack this JS file uses this image
import qrcode from './frame.png'; // Tell webpack this JS file uses this image
import check from './check.png'; // Tell webpack this JS file uses this image
import dne from './dne.png'; // Tell webpack this JS file uses this image

import une from './une.png'; // Tell webpack this JS file uses this image
import menu from './menu.png'; // Tell webpack this JS file uses this image

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='item'>
          <img width="150px" src={dne} />
        </div>

        <div className='menuContainer'>
          <img width="50px" src={une} />
          <img height={32} src={menu} />
        </div>
      </div>

      <div className='container'>
        <div style={{flexDirection: 'row',display: 'flex',justifyContent: 'center'}}>
          <div className='card'><img className='foto' src={foto} /></div>
          <div style={{width: '3%'}}></div>
          <div className='card qrcodeContainer'>
            <img className='qrcode' src={qrcode} />
            <span style={{textAlign: 'center'}}>C0TPFG</span>
            </div>
        </div>

        <div className='info'>
          <span className='title'>MATEUS MEDEIROS DE ASSIS BRITO</span>
          <p><span>Ins. Ensino:</span> Universidade Federal do Rio Grande do Norte</p>
          <p><span>Curso:</span> Bacharelado em Engenharia da Computação</p>
          <p><span>Nível de Ensino:</span> SUPERIOR</p>
          <p><span>RG:</span> 003036166</p>
          <p><span>Data de Nasc:</span> 04/12/1997</p>
          <p><span>Validade:</span> 31/03/2025</p>
        </div>
      </div>

      <div className='certified'>
      <img src={check} />
      <p class="text">Válido</p>
      </div>
    </div>
  );
}

export default App;
