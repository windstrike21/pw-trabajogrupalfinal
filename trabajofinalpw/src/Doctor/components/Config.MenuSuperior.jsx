const MenuSuperior = () => {
    return <div className="row border my-3 px-3 py-3">
        <div className="col-2 text-end">
            <img src="/pw-trabajogrupal/Doctor/Photos/default-avatar.png" height="100" width="100" />
        </div>
        <div className="col-8">
            <h4>Mi cuenta</h4>
            <h6>Mi especialidad</h6>
            <h6>Email: user@example.com</h6>
        </div>
        <div className="col-2 text-end">
            <a href="/pw-trabajogrupal/Doctor/indexlogeado.html">
                <button type="button" className="btn btn-danger">Cerrar</button>
            </a>
        </div>
    </div>
}

export default MenuSuperior;