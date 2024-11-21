import React from "react";
import { useNavigate } from "react-router-dom"; // Importando para navegação
import "../styles.css"; // Caminho correto para o arquivo de estilos

export default function Login() {
  const navigate = useNavigate(); // Hook de navegação

  // Função para navegação para a página de cadastro
  const handleRegisterClick = () => {
    navigate("/register"); // Redireciona para a página de registro
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-screen px-6 pt-[60px] pb-[30px] bg-[rgba(28,28,35,1)]">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-row justify-center items-center w-full pr-[35px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38mifh4dp68-I314%3A358%3B66%3A2516?alt=media&token=894303e2-f031-4b30-b918-10aa28502a31"
            alt="Logo Nell Gestão"
            className="w-[30.83px] h-[30.83px] mr-2"
          />
          <p className="text-xl font-inter font-bold text-white text-center tracking-[4px]">
            Nell Gestão
          </p>
        </div>

        {/* Campos de input */}
        <div className="w-full mt-6">
          <div className="mb-2">
            <label htmlFor="usuario" className="text-xs text-[#666680] font-inter font-medium">Usuário</label>
            <input
              id="usuario"
              type="text"
              placeholder="Digite seu usuário"
              className="w-full mt-2 p-3 border border-[#666680] rounded-md text-sm text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senha" className="text-xs text-[#666680] font-inter font-medium">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              className="w-full mt-2 p-3 border border-[#666680] rounded-md text-sm text-black"
            />
          </div>
        </div>

        {/* Lembre de mim e Esqueci a senha */}
        <div className="flex justify-between w-full mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="lembrar" className="mr-2" />
            <label htmlFor="lembrar" className="text-sm text-[#666680]">Lembrar de mim</label>
          </div>
          <p className="text-sm text-[#666680] cursor-pointer">Esqueceu a senha?</p>
        </div>

        {/* Botão de login */}
        <div className="w-full px-6 py-3 mb-4 bg-gradient-to-b from-[#FF7966] to-[#FF7966] rounded-full shadow-lg text-center">
          <p className="text-sm font-inter font-semibold text-white">Entrar</p>
        </div>

        {/* Link para cadastro */}
        <p className="text-sm text-white text-center mb-4">
          Você ainda não tem uma conta?
        </p>
        <div
          className="w-full px-6 py-3 bg-opacity-10 border border-white rounded-full text-center cursor-pointer hover:bg-opacity-20 focus:outline-none active:bg-opacity-30 transition-all"
          onClick={handleRegisterClick} // Chama a função de navegação
        >
          <p className="text-sm font-inter font-semibold text-white">Cadastrar-se</p>
        </div>
      </div>
    </div>
  );
}
