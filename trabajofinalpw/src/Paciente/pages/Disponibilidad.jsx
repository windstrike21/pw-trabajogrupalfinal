import DatosD from "../components/Disponibilidad.DatosD";
import Horario from "../components/Disponibilidad.Horario";
import ModalP from "../components/Disponibilidad.ModalP";

const Disponibilidad = () => {
    return <>
    <Header />
    <div class="container-fluid mt-5 py-3">
        <DatosD />
    </div>
    <div class="container-fluid">
        <div class="card px-5 py-5 bg-info bg-opacity-10">
            <Horario />
        </div>
    </div>
    <ModalP />
    <Footer />
</>
}
export default Disponibilidad;