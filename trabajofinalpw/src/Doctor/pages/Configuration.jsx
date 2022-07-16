import MenuSuperior from "../components/Config.MenuSuperior"
import DatosUsuario from "../components/Config.DatosUsuario"
import DatosHorario from "../components/Config.DatosHorario"
import DatosConsulta from "../components/Config.DatosConsulta"
import Ayuda from "../components/Config.Ayuda"

const Configuration = () => {
    return <>
        <header></header>
        <div class="px-4">
            <MenuSuperior />
            <div class="row border my-3 px-3 py-3">
                <h3 class="text-center mb-4 mt-2">Información de la cuenta</h3>                
                <DatosUsuario />            
                <DatosHorario />
                <div class="col-xxl-4 mb-2">
                    <DatosConsulta />
                    <Ayuda /> 
                </div>
            </div>
        </div>
        <footer></footer>
    </>
}

export default Configuration;