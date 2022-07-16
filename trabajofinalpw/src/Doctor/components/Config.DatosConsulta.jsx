const DatosConsulta = () => {
    return <div className="card">
        <div className="mt-3 mb-3 ms-3 me-3">
            <div className="row">
                <div className="col-lg-12">
                    <h5 className="mb-4">Datos de consulta</h5>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="mb-3">Presencial</div>
                            <div className="input-group">
                                <span className="input-group-text">S/.</span>
                                <input className="form-control" type="number" placeholder="Monto" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">Virtual</div>
                            <div className="input-group">
                                <span className="input-group-text">S/.</span>
                                <input className="form-control" type="number" placeholder="Monto" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">Plataforma</div>
                            <div><input className="form-control" type="text" placeholder="nombre plataforma" /></div>
                        </div>
                        <div className="col">
                            <div className="mb-3">Link</div>
                            <div><input className="form-control" type="text" placeholder="link consulta" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DatosConsulta;