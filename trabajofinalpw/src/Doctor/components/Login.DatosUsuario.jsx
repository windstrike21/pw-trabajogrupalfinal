const Datos = () => {
    return <>
        <div className="input-group mb-4">            
            <input placeholder="Correo de usuario" type="email" className="form-control"/>
        </div>
        <div className="input-group mb-3">
            <input key="passwdcheck" placeholder="Contraseña" type="password" className="form-control"/>
                <span className="input-group-text">
                    <input type="checkbox" className="form-check-input" onclick="cambiarStatusClave()" checked />&nbsp;<span key="passwdtext" className="op-50">oculto</span>
                </span>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" key="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Mantener sesión activa</label>
        </div>
        <div className="mb-4 text-center">
            <a href="/pw-trabajogrupal/Doctor/medforgotpassword.html" className="btn btn-outline-light forgotpass">
                &nbsp;&nbsp;&nbsp;&nbsp;He olvidado mi contraseña&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
        </div>
        <div className="mb-5 text-center">
            <a href="/pw-trabajogrupal/Doctor/medprogramation.html">
                <button type="button" className="btn btn-outline-success loginbut">INGRESAR</button>
            </a>
        </div>
    </>
}

export default Datos;