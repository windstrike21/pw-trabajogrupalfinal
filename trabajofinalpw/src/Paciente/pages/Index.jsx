import React from "react";
import HeaderPaciente from "../components/Header";
import CarrouselPaciente from "../components/Carrousel";
import FooterPaciente from "../components/Footer";

const PacienteIndex = () => {
  return (
    <div>
      <HeaderPaciente />

      <CarrouselPaciente />

      <FooterPaciente />
    </div>
  );
};

export default PacienteIndex;
