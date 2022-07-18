const Pendientes = () => {
    return <table className="table-responsive table-bordered border-dark bg-light mb-5">
        <thead className="table-active bg-dark bg-opacity-50">
            <tr>
                <th className="ps-1" scope="col">Médico</th>
                <th className="ps-1" scope="col">Paciente</th>
                <th className="ps-1" scope="col">Fecha</th>
                <th className="ps-1" scope="col">Especialidad</th>
                <th className="ps-1" scope="col">Diagnóstico</th>
                <th className="ps-1" scope="col">Receta</th>
                <th className="ps-1" scope="col">Estado</th>
                <th className="ps-1" scope="col">Calificación</th>
            </tr>
        </thead>
        <tbody/>
            <tr>
                <td className="ps-1">Dr. Juan Carlos</td>
                <td className="ps-1">Diego Vila</td>
                <td className="ps-1">23/05/2022 08:00am<span id="horario0"></span></td>
                <td className="ps-1">Odontología</td>
                <td className="ps-1"></td>
                <td className="ps-1"></td>
                <td className="ps-1">Pendiente</td>
                <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" disabled>Calificar atención</button></td>
            </tr>
            <tr>
                <td className="ps-1">Dr. Oscar Goicochea</td>
                <td className="ps-1">Diego Vila</td>
                <td className="ps-1">03/06/2022 08:00am<span id="horario1"></span></td>
                <td className="ps-1">Medicina general</td>
                <td className="ps-1"></td>
                <td className="ps-1"></td>
                <td className="ps-1">Pendiente</td>
                <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" disabled>Calificar atención</button></td>

            </tr>
            <tr>
                <td className="ps-1">Dr. Richard Qqueccaño</td>
                <td className="ps-1">Diego Vila</td>
                <td className="ps-1">03/06/2022 09:00am<span id="horario2"></span></td>
                <td className="ps-1">Dermatología</td>
                <td className="ps-1"></td>
                <td className="ps-1"></td>
                <td className="ps-1">Pendiente</td>
                <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" disabled>Calificar atención</button></td>
            </tr>
        <tbody/>
    </table>
}
export default Pendientes;