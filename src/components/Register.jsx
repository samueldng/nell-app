import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook de navegação
import "../styles.css";  // Ajuste o caminho para os estilos

export default function Register() {
  const navigate = useNavigate(); // Hook para navegação

  // Estado para armazenar os valores dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o envio do cadastro
  const handleRegisterClick = () => {
    // Validação simples (exemplo)
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode adicionar lógica de cadastro (chamada de API, etc.)
    console.log("Cadastro concluído!");
    
    // Navegação após o cadastro
    // Exemplo de navegação para a página principal ou de login
    navigate("/home"); // Ou para qualquer outra página desejada após o cadastro
  };

  // Função para navegar para a tela de login
  const handleLoginClick = () => {
    navigate("/login"); // Navega para a página de login
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-screen p-6 box-border bg-[#1C1C23]">
      <div className="flex flex-col items-center w-full h-full box-border">
        {/* Cabeçalho com logo */}
        <div className="flex flex-row justify-center items-center w-full mb-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/um40nwqlup-I314%3A351%3B66%3A2516?alt=media&token=851303cd-86c8-4da4-b095-e7c3a3c08edb"
            alt="Logo"
            className="w-[30.83px] h-auto"
          />
          <p className="text-xl font-inter font-bold text-white tracking-[4px] ml-2">
            Nell Gestão
          </p>
        </div>

        {/* Título e campos */}
        <div className="w-full mb-4">
          <p className="text-xs font-inter font-medium text-[#666680] tracking-[0.2px]">
            Endereço de E-mail
          </p>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email} // Vincula o estado
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
            className="w-full p-3 mt-1 bg-[#2C2C35] text-white border border-[#666680] rounded-md"
          />
        </div>

        <div className="w-full mb-6">
          <p className="text-xs font-inter font-medium text-[#666680] tracking-[0.2px]">
            Senha
          </p>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password} // Vincula o estado
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
            className="w-full p-3 mt-1 bg-[#2C2C35] text-white border border-[#666680] rounded-md"
          />
        </div>

        {/* Imagem decorativa */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/um40nwqlup-12%3A2780?alt=media&token=2c87038f-1c89-49a4-9e43-b67cb649f7b5"
          alt="Imagem decorativa"
          className="w-full h-[5px] mb-4"
        />

        {/* Informações sobre a senha */}
        <p className="text-xs font-inter font-medium text-[#666680] tracking-[0.2px] mb-4">
          Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.
        </p>

        {/* Botão de cadastro */}
        <div
          className="flex justify-center items-center w-full px-6 py-3 bg-gradient-to-t from-red-500 to-red-500 rounded-full shadow-lg mb-4"
          onClick={handleRegisterClick}
          role="button"
          tabIndex={0}
        >
          <p className="text-sm font-inter font-semibold text-white">
            Cadastre agora!
          </p>
        </div>

        {/* Texto com link para login */}
        <p className="text-sm font-inter font-normal text-center text-white tracking-[0.2px] mb-4">
          Você já tem uma conta?
        </p>

        {/* Botão de login */}
        <div
          className="flex justify-center items-center w-full px-6 py-3 bg-white/10 rounded-full"
          onClick={handleLoginClick}
          role="button"
          tabIndex={0}
        >
          <p className="text-sm font-inter font-semibold text-white">
            Entrar
          </p>
        </div>
      </div>
    </div>
  );
}
