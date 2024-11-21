import React from "react";
import ReactDOM from "react-dom/client"; // Importando a API de React 18 para criar a raiz
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importando o React Router
import WelcomeScreen from "./components/WelcomeScreen"; // Importando o componente de boas-vindas
import Register from "./components/Register"; // Importando o componente de registro
import Login from "./components/Login"; // Importando o componente de login
import HomeP from "./components/HomeP"; // Corrigindo a importação do componente HomeP

const root = ReactDOM.createRoot(document.getElementById("root")); // Criando a raiz de renderização

// Renderizando os componentes e utilizando o Router para navegação entre as páginas
root.render(
  <Router>
    <Routes>
      {/* Definindo a rota de boas-vindas */}
      <Route path="/" element={<WelcomeScreen />} />
      {/* Definindo a rota da página de registro */}
      <Route path="/register" element={<Register />} />
      {/* Definindo a rota da página de login */}
      <Route path="/login" element={<Login />} />
      {/* Definindo a rota para a HomeP */}
      <Route path="/homep" element={<HomeP />} />
    </Routes>
  </Router>
);
