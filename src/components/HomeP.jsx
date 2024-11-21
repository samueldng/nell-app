import React from "react";
import { useNavigate } from "react-router-dom"; // Hook de navegação
import "../styles.css"; // Caminho correto para o arquivo de estilos

export default function HomeP() {
  const navigate = useNavigate(); // Hook de navegação

  // Função para navegar para a página de configurações
  const handleSettingsClick = () => {
    navigate("/settings"); // Exemplo de navegação para configurações
  };

  return (
    <div className="relative flex flex-col justify-start items-start w-full h-screen px-6 pt-[25px] pb-[30px] bg-[rgba(28,28,35,1)]">
      {/* Componente de fundo ajustado com 50% de altura e bordas arredondadas */}
      <div className="absolute inset-x-0 top-0 h-[50%] bg-[rgba(53,53,66,1)] opacity-50 rounded-b-3xl z-0" />

      <div className="flex flex-col items-center w-full h-full relative z-10">
        {/* Cabeçalho com logo */}
        <div className="flex flex-row justify-center items-center w-full mb-6 relative"> 
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38mifh4dp68-I314%3A358%3B66%3A2516?alt=media&token=894303e2-f031-4b30-b918-10aa28502a31"
            alt="Logo Nell Gestão"
            className="w-[25px] h-[25px] mr-2"
          />
          <p className="text-xl font-inter font-bold text-white text-center tracking-[4px]">
            Nell Gestão
          </p>

          {/* Ícone de configurações na lateral direita */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ij4dwfumvb-42%3A2082?alt=media&token=0b5512e4-5a74-4e88-8041-4856375bb102"
            alt="Configurações"
            className="absolute right-0.5 top-7 cursor-pointer w-[24px] h-[24px]" 
            onClick={handleSettingsClick} // Chama a função para navegar para as configurações
          />
        </div>

        {/* Conteúdo principal aqui */}
        <div className="w-full mt-6">
          {/* Adicione mais conteúdo aqui */}
        </div>
      </div>

      {/* Rodapé com a imagem como menu de navegação */}
      <div className="fixed bottom-0 left-0 w-full bg-[rgba(28,28,35,1)] p-4 shadow-lg flex justify-center items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nvujto9zy6p-66%3A2814?alt=media&token=ca27cbdb-0554-4aeb-8d0f-b47eba1d480d"
          alt="Menu de navegação"
          className="w-[375px] h-[75px] cursor-pointer"
          onClick={() => navigate("/homep")} // Exemplo de navegação
        />
      </div>
    </div>
  );
}
