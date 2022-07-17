const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeaderID" aria-controls="navbarHeaderID" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" key="navbarHeaderID">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Próximas citas <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Calendario de citas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Historial de Citas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Preguntas de pacientes</a>
                </li>        
            </ul>
        </div>
    </nav>
}

export default Header;