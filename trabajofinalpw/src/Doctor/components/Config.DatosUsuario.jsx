const DatosUsuario = () => {
    return <div className="col-xxl-4 mb-2">
        <div className="card">
            <div className="mt-3 mb-3 ms-3 me-3">
                <h5 className="mb-4">Datos de Usuario</h5>
                <div className="row">
                    <div className="col-8">
                        <div className="mb-3">Nombre</div>
                        <div className="mb-4"><input className="form-control" type="text" value="Rocio" /></div>
                        <div className="mb-3">Apellidos</div>
                        <div className="mb-2"><input className="form-control" type="text" value="Malca Hernández" /></div>
                    </div>
                    <div className="col text-center">
                        <div className="mb-2 fs-sm">Foto de perfil</div>                        
                        <div className="mb-2"><img src="/pw-trabajogrupal/Doctor/Photos/default-avatar.png" className="img-fluid" /></div>
                        <div>
                            <input className="form-control form-control-sm" key="formFileSm" type="file" accept="image/*" />
                        </div>
                    </div>
                </div>
                <div><a href="#" className="btn btn-link">Cambiar mi dirección de correo</a></div>
                <div><a href="#" className="btn btn-link">Cambiar mi contraseña</a></div>
                <div className="mt-3 mb-3">Contacto</div>
                <div className="row">
                    <div className="col">
                        <input type="number" placeholder="celular" className="form-control" />
                    </div>
                    <div className="col">
                        <input type="number" placeholder="teléfono" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DatosUsuario;