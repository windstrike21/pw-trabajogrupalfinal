const ModoIngreso = () => {
    return <>
        <div className="d-flex justify-space-between align-items-center mb-5">
            <hr className="bg-gray-300 w-100 mr-1" />
            <span className="w-100 text-center">o</span>
            <hr className="bg-gray-300 w-100 ml-1" />
        </div>
        <div className="text-center mb-3">
            <button type="button" className="btn btn-light w-50">
                <div className="row">
                    <div className="col-2">
                        <img src="/pw-trabajogrupal/Doctor/Photos/logofacebook.webp" width="20" height="20" />
                    </div>
                    <div className="col-10 text-start">
                        Ingresar con Facebook
                    </div>
                </div>
            </button>
        </div>
        <div className="text-center mb-3">
            <button type="button" className="btn btn-light w-50">
                <div className="row">
                    <div className="col-2">
                        <img src="/pw-trabajogrupal/Doctor/Photos/googlelogo.jpg" width="20" height="20" />
                    </div>
                    <div className="col-10 text-start">
                        Ingresar con Google
                    </div>
                </div>
            </button>
        </div>
        <div className="text-center mb-3">
            <button type="button" className="btn btn-light w-50">
                <div className="row">
                    <div className="col-2">
                        <img src="/pw-trabajogrupal/Doctor/Photos/logoapple.png" width="20" height="20" />
                    </div>
                    <div className="col-10 text-start">
                        Ingresar con Apple
                    </div>
                </div>
            </button>
        </div>
        <div className="my-5 text-center fs-sm">
            ¿No tienes cuenta?
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/pw-trabajogrupal/Doctor/medregister.html" className="btn btn-outline-warning">Registrarse</a>
        </div>
    </>
}

export default ModoIngreso;