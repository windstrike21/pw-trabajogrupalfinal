const Header = () => {
    return <div className="card">
        <div className="card-header border-0">
            <div className="row mt-2">
                <div className="col-1 text-center">
                    <a href="/pw-trabajogrupal/Doctor/index.html">
                        <img src="/pw-trabajogrupal/Doctor/Photos/Logo3.png" width="35" height="35" />
                    </a>
                </div>
                <div className="col-2">
                    <a href="/pw-trabajogrupal/Doctor/index.html">
                        <button type="button" className="btn btn-light border btn-lg">Home</button>
                    </a>
                </div>
                <div className="col-9 fs-sm d-flex justify-content-end">
                    <ul className="pagination">
                        <li><a href="/pw-trabajogrupal/paciente/pacientelogin.html"><button type="button" className="border btn btn-light btn-sm">Ingresar</button></a></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <a href="/pw-trabajogrupal/paciente/pacienteregister.html"><button type="button" className="border btn btn-light btn-sm">Registrarse</button></a>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-sm opacity-75">¿Es usted médico?</button>
                                <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split btn-sm opacity-75" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul className="dropdown-menu w-75 bg-light opacity-75">
                                    <li><a className="dropdown-item" href="/pw-trabajogrupal/Doctor/medregister.html">Registrarse</a></li>
                                    <li><a className="dropdown-item" href="/pw-trabajogrupal/Doctor/medregister.html">Iniciar sesión</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Header;