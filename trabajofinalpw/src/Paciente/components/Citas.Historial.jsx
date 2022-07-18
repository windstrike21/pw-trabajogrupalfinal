const Historial = () => {
    return <table className="table-responsive table-bordered border-dark bg-light mt-5">
        <h5 className="card-title text-center mt-5">CITAS ATENDIDAS</h5>
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
        <tbody />
        <tr>
            <td className="ps-1">Dr. Juan Carlos</td>
            <td className="ps-1">Diego Vila</td>
            <td className="ps-1">19/03/2020 12:00pm<span id="horario0"></span></td>
            <td className="ps-1">Medicina Interna</td>
            <td className="ps-1">Bajo en hemoglobina</td>
            <td className="ps-1">Dieta de alimentos altos en hierro</td>
            <td className="ps-1">Atendida</td>
            <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Calificar atención</button></td>
        </tr>
        <tr>
            <td className="ps-1">Dr. Oscar Goicochea</td>
            <td className="ps-1">Diego Vila</td>
            <td className="ps-1">09/11/2021 08:00am<span id="horario1"></span></td>
            <td className="ps-1">Traumatología</td>
            <td className="ps-1">Fractura Fémur</td>
            <td className="ps-1">Cirugía</td>
            <td className="ps-1">Atendida</td>
            <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Calificar atención</button></td>

        </tr>
        <tr>
            <td className="ps-1">Dr. Eloy Medina</td>
            <td className="ps-1">Diego Vila</td>
            <td className="ps-1">16/05/2022 12:00pm<span id="horario2"></span></td>
            <td className="ps-1">Psiquiatría</td>
            <td className="ps-1">Trastorno de ansiedad depresivo</td>
            <td className="ps-1">Pastillas antidepresivas</td>
            <td className="ps-1">Atendida</td>
            <td style="text-align:center"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Calificar atención</button></td>
        </tr>
    </table>
}
export default Historial;