import React from "react";
import { Link } from "react-router-dom";

const HeaderPaciente = () => {
  return (
    <div class="card">
      <div class="card-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a
              href="/pw-trabajogrupal/paciente/pacienteindex.html"
              class="navbar-brand"
            >
              <img
                src="/pw-trabajogrupal/paciente/imagenes/Logo3P.png"
                class="img-circle"
                width="32"
                height="32"
                alt="ImagenEmpresa"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#barranavegacion"
              aria-controls="barranavegacion"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse nav nav-tabs"
              id="barranavegacion"
            >
              <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item ">
                  <Link
                    class="nav-link"
                    aria-current="page"
                    to="/paciente-index"
                  >
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/pw-trabajogrupal/paciente/pacientebusqueda.html"
                  >
                    Staff Médico
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/pw-trabajogrupal/paciente/pacientemiscitas.html"
                  >
                    Mis Citas
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/pw-trabajogrupal/paciente/pacienterecomendaciones.html"
                  >
                    Recomendaciones
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/paciente-perfil"
                  >
                    Perfil
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/pw-trabajogrupal/paciente/pacientepregunta.html"
                  >
                    Pregúntale al experto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPaciente;
