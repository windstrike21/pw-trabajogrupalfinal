const DatosHorario = () => {
    return <div className="col-xxl-4 mb-2">
        <div className="card">
            <div className="mt-3 mb-3 ms-3 me-3">
                <h5 className="mb-4">Horarios de Disponibilidad</h5>                
                <div className="container">
                    <div className="row">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Día</th>
                                    <th scope="col" >Horas</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody key="tbody">

                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-outline-success" onclick="agregarHorario()">&nbsp;&nbsp;Nuevo&nbsp;&nbsp;</button>
                </div>
            </div>
        </div>
    </div>
}

export default DatosHorario;