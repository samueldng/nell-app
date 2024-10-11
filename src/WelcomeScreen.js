import React from "react";
import "./styles.css";

export default function WelcomeScreen() {
  return (
    <div className="container"> {/* Adiciona um contêiner externo */}
      <div className="welcome-screen clip-contents">
        <div className="button">
          <p className="ihave-an-account">Eu tenho uma conta</p>
        </div>
        <div className="button-1">
          <p className="get-started">Começar</p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2776?alt=media&token=13be4703-5c10-4a7b-86a0-6b727bff9035"
          alt="Not Found"
          className="image"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-32%3A4768?alt=media&token=7e0cafd8-2cca-4e2a-bda4-519a393096b1"
          alt="Not Found"
          className="frame"
        />
        <p className="bem-vindo-aqui-sua-organ">
          Bem-vindo! Aqui, sua organização encontra<br /> eficiência e simplicidade.
        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2405?alt=media&token=1fe12aa7-f133-4db0-abd9-5a8f61a17785"
          alt="Not Found"
          className="frame-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2777?alt=media&token=c6a977b8-3e48-44be-9958-88df4de7271c"
          alt="Not Found"
          className="image-1"
        />
        <div className="assets-logo clip-contents">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-I66%3A2523%3B66%3A2516?alt=media&token=393cb6ad-e0e9-4770-9187-3fcb303dbc98"
            alt="Not Found"
            className="frame-2"
          />
          <p className="nell-gest-o"> Nell Gestão</p>
        </div>
      </div>
    </div>
  );
}
