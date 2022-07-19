import React from "react";
import HeaderPaciente from "../components/Header";

const PacientePerfil = () => {
  return (
    <div>
      <HeaderPaciente />
      <div class="card container-fluid">
        <div class="card-body ">
          <div class="row">
            <div class="col-3">
              <img
                src="/pw-trabajogrupal/paciente/imagenes/usuario.png"
                alt="foto-perfil"
                class="img-circle float-end"
                width="64"
                height="64"
              />
            </div>
            <div class="col-3">
              <div class="row">Regular Peruvian</div>
              <div class="row">email@algo.com</div>
            </div>
            <div class="col-4">
              <a
                href="/pw-trabajogrupal/paciente/pacienteindex.html"
                type="button"
                class="btn-close float-end"
                aria-label="Close"
              ></a>
            </div>
          </div>
          <div>
            <h1 class="row d-flex justify-content-center">MiPerfil</h1>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="row ">
            <div class="col-lg-6 border-1">
              <div>
                <label class="form-label" for="frm_name">
                  Nombres:{" "}
                </label>
                <input
                  id="frm_name"
                  class="form-control"
                  placeholder="Juan Pablo"
                  type="text"
                  readonly
                />
              </div>
              <div class="mt-3">
                <label class="form-label" for="frm_last_name">
                  Apellidos:{" "}
                </label>
                <input
                  id="fmr_last_name"
                  placeholder="Pérez Huamán"
                  type="text"
                  class="form-control"
                  readonly
                />
              </div>
              <div class="mt-3">
                <label class="form-label" for="frm_email">
                  Correo:{" "}
                </label>
                <input
                  id="frm_email"
                  placeholder="tucorreo@algo.com"
                  type="email"
                  class="form-control"
                  readonly
                />
              </div>
              <div class="mt-3">
                <label class="form-label" for="frm_password">
                  Contraseña:{" "}
                </label>
                <input
                  id="passwordcheck"
                  placeholder="*********"
                  type="password"
                  class="form-control"
                  readonly
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div>
                <label class="form-label" for="frm_telf">
                  Número de Teléfono:{" "}
                </label>
                <input
                  id="fmr_telf"
                  placeholder="Escribe tu número de teléfono"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mt-3">
                <label class="form-label" for="frm_dni">
                  Documento de Identidad:{" "}
                </label>
                <input
                  id="frm_dni"
                  class="form-control"
                  placeholder="Escribe el número de tu documento de identidad"
                  type="text"
                />
              </div>
              <div class="mt-3">
                <label class="form-label" for="frm_distrito">
                  Distrito:{" "}
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione su distrito de residencia</option>
                  <option value="1">Pachacamc</option>
                  <option value="2">Ate</option>
                  <option value="3">La Molina</option>
                </select>
                <div class="mt-3">
                  <label class="form-label" for="frm_direccion">
                    Dirección:{" "}
                  </label>
                  <input
                    id="frm_direccion"
                    class="form-control"
                    placeholder="Escriba du direccion"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 text-center">
          <div class="mt-4">
            <button
              type="button"
              class="btn btn-danger border border-primary w-50"
            >
              Editar Perfil
            </button>
          </div>
        </div>
        <div class="col-lg-4 text-center ">
          <div class="mt-4">
            <button
              type="button"
              class=" btn btn-danger border border-primary w-50"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <div class="mt-4">
            <button
              type="button"
              class=" btn btn-danger border border-primary w-50"
            >
              Eliminar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacientePerfil;
