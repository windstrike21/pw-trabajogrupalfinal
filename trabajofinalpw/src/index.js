import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PacienteLogin from "./Paciente/pages/Login";
import Index from "./General/pages/Index";
import PacienteIndex from "./Paciente/pages/Index";
import Header from "./Paciente/components/Header"
import PacienteRegistro from "./Paciente/pages/Register";
import PacientePerfil from "./Paciente/pages/Perfil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/paciente-login" element={<PacienteLogin />} />
      <Route path="/paciente-index" element={<PacienteIndex />} />
      <Route path="/paciente-registro" element={<PacienteRegistro />} />
      <Route path="/paciente-perfil" element={<PacientePerfil />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
