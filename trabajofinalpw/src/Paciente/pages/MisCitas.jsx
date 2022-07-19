import Cuenta from "../components/Citas.Cuenta";
import Historial from "../components/Citas.Historial";
import Pendientes from "../components/Citas.Pendientes";
import ModalC from "../components/Citas.ModalC";

const MisCitas = () => {
    return <>
        <Header />
        <div class="container-fluid mt-5 py-3">
            <Cuenta />
        </div>
        <div class="container-fluid">
            <div class="card px-5 py-5 bg-info bg-opacity-10">
                <Pendientes />
                <Historial />
            </div>
        </div>
        <ModalC />
        <Footer />
    </>
}
export default MisCitas;