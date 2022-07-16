const DatosUsuario = () => {
    return <>
        <h3 className="mb-4">Datos de usuario</h3>
        <div className="mb-4">
            <input type="email" className="form-control w-75" placeholder="Correo electrónico" />
            <div className="form-text">Tu correo no será compartido sin tu consentimiento.</div>
        </div>
        <div className="row mb-3">
            <div className="col-6">
                <div className="input-group mb-3">
                    <input key="passwd1" type="password" className="form-control" placeholder="Contraseña" />
                    <button className="btn btn-outline-secondary" type="button" key="generarpasswd" onclick="generatePassword()">Generar</button>
                </div>
                <div className="form-text">
                    Al menos 8 caracteres (letras y números), sin espacios, caracteres especiales o emojis.
                </div>
            </div>
            <div className="col-1">                
                <button key="passwdcheck" type="button" className="btn btn-secondary eye" onclick="cambiarEstadoPassword()">👁</button>
            </div>
            <div className="col-5">
                <div className="input-group mb-3">
                    &nbsp;&nbsp;&nbsp;
                    <input key="passwd2" type="password" className="form-control" placeholder="Confirmar contraseña" />
                </div>
                <div className="form-text">                    
                </div>
            </div>
        </div>
    </>
}

export default DatosUsuario