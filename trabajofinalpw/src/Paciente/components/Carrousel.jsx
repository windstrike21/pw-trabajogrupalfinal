import React from "react";

const CarrouselPaciente = () => {
  return (
    <div class="card-body">
      <div class="container-fluid">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="/img/HospitalFront.jpg"
                class="d-block w-100"
                alt="imagenhospital"
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="col">
                  <div class="card pt-1">
                    <h6 class="card-title">PLANIFICA TU CITA</h6>
                    <h12 class="card-subtitle mb-2 text-muted">
                      Selecciona la especialidad y tipo de atención. Luego haz
                      click en el botón BUSCAR
                    </h12>
                    <div class="card mx-2 my-2">
                      <div class="card-body">
                        <div class="row ">
                          <div class="col-lg-4 ">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Especialidad</option>
                              <option value="1">Medicina Familiar</option>
                              <option value="2">Medicina Interna</option>
                              <option value="3">Pediatría</option>
                              <option value="">Gineco obstetricia</option>
                              <option value="">Cirugía</option>
                              <option value="">Psiquiatría</option>
                              <option value="">Cardiología</option>
                              <option value="">Dermatología</option>
                            </select>
                          </div>

                          <div class="col-lg-4 ">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Tipo de atención</option>
                              <option value="1">Virtual</option>
                              <option value="2">Presencial</option>
                            </select>
                          </div>
                          <div class="col-lg-4 ">
                            <a href="/pw-trabajogrupal/paciente/pacientebusqueda.html">
                              <button class="btn btn-primary w-100">
                                BUSCAR
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarrouselPaciente;
