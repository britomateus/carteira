import appleWallet from "./apple-wallet.png"; // Tell webpack this JS file uses this image
import dne from "./dne.png"; // Tell webpack this JS file uses this image
import qrcode from "./frame.png"; // Tell webpack this JS file uses this image

import menu from "./menu.png";
import une from "./une.png"; // Tell webpack this JS file uses this image

const Carteira = ({ nome, curso, rg, dataNasc, foto }) => {
  return (
    <div className="App">
      <div className="header">
        <div className="item">
          <img alt="" width="150px" src={dne} />
        </div>

        <div className="menuContainer">
          <img alt="" width="50px" src={une} />
          <img alt="" height={32} src={menu} />
        </div>
      </div>

      <div className="notification-section">
        <div className="notification-card">
          <div className="notification-content">
            <div className="notification-icon">
              <span className="confetti-icon">🎉</span>
            </div>
            <div className="notification-text">
              <h3 className="notification-title">Uhul! Chegou!</h3>
              <p className="notification-description">
                Desbloqueie seu DNE físico e aproveite.
              </p>
            </div>
          </div>
          <button className="unlock-button">
            <span className="lock-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z"/></svg></span>
          </button>
        </div>
      </div>

      <div className="container">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="card">
            <img alt="" className="foto" src={foto} />
          </div>
          <div style={{ width: "3%" }}></div>
          <div className="card qrcodeContainer">
            <img alt="" className="qrcode" src={qrcode} />
            <span style={{ textAlign: "center" }}>C0TPFG</span>
          </div>
        </div>

        <div className="info">
          <span className="title">{nome}</span>
          <p>
            Ins. Ensino: Universidade Federal do Rio Grande do
            Norte
          </p>
          <p>
            Curso: {curso}
          </p>
          <p>
            Nível de Ensino: SUPERIOR
          </p>
          <p>
            RG: {rg}
          </p>
          <p>
            Data de Nasc: {dataNasc}
          </p>
          <p>
            Validade: Mar/2026
          </p>
        </div>
      </div>

      <div className="apple-wallet-section">
        <img alt="Adicionar à Carteira da Apple" src={appleWallet} className="apple-wallet-button" />
      </div>
    </div>
  );
};

export default Carteira;
