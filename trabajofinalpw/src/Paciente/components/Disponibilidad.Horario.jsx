const Horario = () => {
    return <table className="table-responsive table-bordered border-dark bg-light">
        <h5 className="card-title text-center mb-5">HORARIOS</h5>
        <thead className="table-active bg-dark bg-opacity-50">
            <tr>
                <th className="text-center" scope="col">Lunes 16</th>
                <th className="text-center" scope="col">Martes 17</th>
                <th className="text-center" scope="col">Miércoles 18</th>
                <th className="text-center" scope="col">Jueves 19</th>
                <th className="text-center" scope="col">Viernes 20</th>
                <th className="text-center" scope="col">Sábado 21</th>
                <th className="text-center" scope="col">Domingo 22</th>
            </tr>
        </thead>
        <tbody />
        <tr>
            <td className="text-center"><button id="l1" onclick="saveHorario('Lunes','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">08:00 am</button></td>
            <td className="text-center"><button id="m1" onclick="saveHorario('Martes','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>08:00 am</button></td>
            <td className="text-center"><button id="mi1" onclick="saveHorario('Miércoles','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">08:00 am</button></td>
            <td className="text-center"><button id="j1" onclick="saveHorario('Jueves','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>08:00 am</button></td>
            <td className="text-center"><button id="v1" onclick="saveHorario('Viernes','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">08:00 am</button></td>
            <td className="text-center"><button id="s1" onclick="saveHorario('Sábado','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>08:00 am</button></td>
            <td className="text-center"><button id="d1" onclick="saveHorario('Domingo','08:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">08:00 am</button></td>
        </tr>
        <tr>
            <td className="text-center"><button id="l2" onclick="saveHorario('Lunes','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">09:00 am</button></td>
            <td className="text-center"><button id="m2" onclick="saveHorario('Martes','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>09:00 am</button></td>
            <td className="text-center"><button id="mi2" onclick="saveHorario('Miércoles','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">09:00 am</button></td>
            <td className="text-center"><button id="j2" onclick="saveHorario('Jueves','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>09:00 am</button></td>
            <td className="text-center"><button id="v2" onclick="saveHorario('Viernes','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">09:00 am</button></td>
            <td className="text-center"><button id="s2" onclick="saveHorario('Sábado','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>09:00 am</button></td>
            <td className="text-center"><button id="d2" onclick="saveHorario('Domingo','09:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">09:00 am</button></td>
        </tr>
        <tr>
            <td className="text-center"><button id="l3" onclick="saveHorario('Lunes','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">10:00 am</button></td>
            <td className="text-center"><button id="m3" onclick="saveHorario('Martes','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>10:00 am</button></td>
            <td className="text-center"><button id="mi3" onclick="saveHorario('Miércoles','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">10:00 am</button></td>
            <td className="text-center"><button id="j3" onclick="saveHorario('Jueves','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>10:00 am</button></td>
            <td className="text-center"><button id="v3" onclick="saveHorario('Viernes','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">10:00 am</button></td>
            <td className="text-center"><button id="s3" onclick="saveHorario('Sábado','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>10:00 am</button></td>
            <td className="text-center"><button id="d3" onclick="saveHorario('Domingo','10:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">10:00 am</button></td>
        </tr>
        <tr>
            <td className="text-center"><button id="l4" onclick="saveHorario('Lunes','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">11:00 am</button></td>
            <td className="text-center"><button id="m4" onclick="saveHorario('Martes','17:30pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>11:00 am</button></td>
            <td className="text-center"><button id="mi4" onclick="saveHorario('Miércoles','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">11:00 am</button></td>
            <td className="text-center"><button id="j4" onclick="saveHorario('Jueves','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>11:00 am</button></td>
            <td className="text-center"><button id="v4" onclick="saveHorario('Viernes','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">11:00 am</button></td>
            <td className="text-center"><button id="s4" onclick="saveHorario('Sábado','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>11:00 am</button></td>
            <td className="text-center"><button id="d4" onclick="saveHorario('Domingo','11:00am')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">11:00 am</button></td>
        </tr>
        <tr>
            <td className="text-center"><button id="l5" onclick="saveHorario('Lunes','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">12:00 pm</button></td>
            <td className="text-center"><button id="m5" onclick="saveHorario('Martes','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>12:00 pm</button></td>
            <td className="text-center"><button id="mi5" onclick="saveHorario('Miércoles','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">12:00 pm</button></td>
            <td className="text-center"><button id="j5" onclick="saveHorario('Jueves','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>12:00 pm</button></td>
            <td className="text-center"><button id="v5" onclick="saveHorario('Viernes','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">12:00 pm</button></td>
            <td className="text-center"><button id="s5" onclick="saveHorario('Sábado','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>12:00 pm</button></td>
            <td className="text-center"><button id="d5" onclick="saveHorario('Domingo','12:00pm')" type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">12:00 pm</button></td>
        </tr>
    </table>
}
export default Horario;