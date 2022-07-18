const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"/>
            <a href="/pw-trabajogrupal/paciente/pacienteindex.html" className="navbar-brand">
                <img src="/pw-trabajogrupal/paciente/imagenes/Logo3P.png" height="32" alt="CoolBrand"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#barra-navegacion">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="nav-tabs bg-light">
                    <ul className="nav nav-tabs bg-light">

                        <li className="nav-item">
                            <a className="nav-link" href="/pw-trabajogrupal/paciente/pacienteindex.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pw-trabajogrupal/paciente/pacientebusqueda.html">Staff Médico</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pw-trabajogrupal/paciente/pacientemiscitas.html">Mis Citas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pw-trabajogrupal/paciente/pacienterecomendaciones.html">Recomendaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/pw-trabajogrupal/paciente/pacienteperfil.html">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pw-trabajogrupal/paciente/pacientepregunta.html">Pregúntale al experto</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
}
export default Navbar;