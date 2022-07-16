const Ayuda = () => {
    return <div className="card mt-3">
        <div className="mt-3 mb-3 ms-3 me-3">
            <div className="col-lg-12">
                <h5 className="mb-4">¿Necesitas ayuda?</h5>
                <div className="input-group mb-3">
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div className="text-end">
                    <button type="button" className="btn btn-outline-primary">Envíar consulta</button>
                </div>
            </div>
        </div>
    </div>
}

export default Ayuda;