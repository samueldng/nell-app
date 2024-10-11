import React from "react";
import "./styles.css";

export default function WelcomeScreen() {
  const handleStartClick = () => {
    console.log("Começar clicado!");
  };

  const handleAccountClick = () => {
    console.log("Eu tenho uma conta clicado!");
  };

  return (
    <div className="welcome-screen flex flex-col justify-between items-center w-full h-screen box-border bg-[#1C1C23] relative">
      <div className="content flex-1 flex flex-col justify-center items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2776?alt=media&token=13be4703-5c10-4a7b-86a0-6b727bff9035"
          alt="Imagem lateral"
          className="image w-[70px] h-[219px]"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-32%3A4768?alt=media&token=7e0cafd8-2cca-4e2a-bda4-519a393096b1"
          alt="Quadro decorativo"
          className="frame w-[90%] opacity-30"
        />
       <p className="bem-vindo-aqui-sua-organ text-white text-sm text-center">
  Bem-vindo! Aqui, sua organização<br />encontra<br />eficiência e simplicidade.
</p>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2405?alt=media&token=1fe12aa7-f133-4db0-abd9-5a8f61a17785"
          alt="Outro quadro decorativo"
          className="frame-1 w-[90%]"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-41%3A2777?alt=media&token=c6a977b8-3e48-44be-9958-88df4de7271c"
          alt="Imagem lateral"
          className="image-1 w-[150px] h-[219px]"
        />
      </div>

      <div className="flex flex-col items-center mb-4 space-y-4">
        <div
          className="button flex justify-center items-center gap-1.5 w-[324px] h-[48px] p-3 border border-white rounded-full bg-white/10"
          onClick={handleAccountClick}
          role="button"
          tabIndex={0}
        >
          <p className="ihave-an-account text-white text-sm font-semibold">
            Eu tenho uma conta
          </p>
        </div>
        <div
          className="button-1 flex justify-center items-center gap-1.5 w-[324px] h-[48px] p-3 border border-white rounded-full bg-gradient-to-t from-red-500 to-red-500 shadow-lg"
          onClick={handleStartClick}
          role="button"
          tabIndex={0}
        >
          <p className="get-started text-white text-sm font-semibold">
            Começar
          </p>
        </div>
      </div>

      <div className="assets-logo flex justify-center items-center mb-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bj6htd5qqps-I66%3A2523%3B66%3A2516?alt=media&token=393cb6ad-e0e9-4770-9187-3fcb303dbc98"
          alt="Logo da empresa"
          className="frame-2 w-[30.83px] h-full mr-2"
        />
        <p className="nell-gest-o text-white text-lg font-extrabold tracking-[4px] whitespace-nowrap">
          Nell Gestão
        </p>
      </div>
    </div>
  );
}
