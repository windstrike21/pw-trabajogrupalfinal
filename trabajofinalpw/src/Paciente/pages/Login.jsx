import React from "react";
import { Link } from "react-router-dom";

const PacienteLogin = () => {
  return (
    <div class="container mb-3">
      <h1 class="mt-4 mb-4 text-center">Accede a tu cuenta</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-4">
          <div class="input-group mb-3">
            <input
              placeholder="Correo de usuario"
              type="email"
              class="form-control"
            />
          </div>
          <div class="input-group mb-3">
            <input
              id="passwdcheck"
              placeholder="Contraseña"
              type="password"
              class="form-control"
            />
          </div>
          <div class="mb-4 text-center">
            <Link
              to="/paciente-index"
              type="button"
              class="w-100 btn btn-outline-success"
            >
              INGRESAR
            </Link>
          </div>
          <div class="d-flex justify-space-between align-items-center mb-4">
            <hr class="bg-gray-300 w-100 mr-1" />
            <span class="w-100 text-center">o</span>
            <hr class="bg-gray-300 w-100 ml-1" />
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              type="button"
              class="w-100 btn btn-default border border-primary d-flex justify-content-between"
            >
              <img
                src="/img/logofacebook.webp"
                class="img-circle"
                width="32"
                height="32"
              />
              <span class="btn-text mx-auto btn-social-font">
                Continuar con Facebook
              </span>
            </a>
          </div>
          <div class="mt-3">
            <a
              type="button"
              href="https://mail.google.com/mail?hl=es-419"
              class="w-100 btn btn-default border border-primary d-flex justify-content-between"
            >
              <img
                src="/pw-trabajogrupal/paciente/imagenes/googlelogo.jpg"
                class="img-circle"
                width="32"
                height="32"
              />
              <span class="btn-text mx-auto btn-social-font">
                Continuar con Google
              </span>
            </a>
          </div>

          <div class="mt-3">
            <a
              type="button"
              href="https://www.icloud.com/"
              class="w-100 btn btn-default border border-primary d-flex justify-content-between"
            >
              <img
                src="/pw-trabajogrupal/paciente/imagenes/logoapple.png"
                class="img-circle"
                width="32"
                height="32"
              />
              <span class="btn-text mx-auto btn-social-font">
                Continuar con Apple
              </span>
            </a>
          </div>

          <div class="mb-5 text-center mb-3">
            <div class="mt-4 mb-2">¿No tienes cuenta?</div>
            <div>
              <Link
                to="/paciente-registro"
                class="w-100 btn btn-outline-warning"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteLogin;
