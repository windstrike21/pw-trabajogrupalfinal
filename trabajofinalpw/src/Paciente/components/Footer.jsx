import React from "react"

const Footer = () => {
  return (
    <div className="card-footer">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav me-auto my-2 my-lg-0">
            <ul className="pagination">
              <li className="page-item mx-2">
                <a className="page-link" href="/index.html">
                  <img
                    src="/pw-trabajogrupal/paciente/imagenes/Logo3P.png"
                    width="32"
                    height="32"
                    alt="ImagenEmpresa"
                  />
                </a>
              </li>
              <li className="page-item mx-2">
                <a className="page-link" href="/index.html">
                  Inicio
                </a>
              </li>
              <li className="page-item mx-2">
                <a className="page-link" href="#">
                  Acerca
                </a>
              </li>
              <li className="page-item mx-2">
                <a className="page-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Footer;
