const DatosPersonales = () => {
    return <>
        <h3 className="mb-4">Datos personales</h3>
        <div className="mb-3 fs-sm">campos requeridos: *</div>
        <div className="input-group mb-4">
            <span className="input-group-text">*</span>
            <input type="text" className="form-control" placeholder="Primer nombre" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">&nbsp;</span>
            <input type="text" className="form-control" placeholder="Segundo nombre" />
        </div>
        <div className="input-group mb-4">
            <span className="input-group-text">*</span>
            <input type="text" className="form-control" placeholder="Apellido paterno" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">*</span>
            <input type="text" className="form-control" placeholder="Apellido materno" />
        </div>
        <div className="row mb-4">
            <div className="col-6">
                <div className="input-group">
                    <span className="input-group-text">*</span>
                    <input type="text" className="form-control" placeholder="DNI" />
                </div>
            </div>
            <div className="col-4">
                <div className="dropdown">
                    <button className="w-100 btn btn-secondary dropdown-toggle" type="button" key="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Especialidad
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="input-group mb-5">
            <span className="input-group-text">*</span>
            <input type="text" className="form-control" placeholder="Celular" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">&nbsp;</span>
            <input type="text" className="form-control" placeholder="Teléfono" />
        </div>
    </>
}

export default DatosPersonales;