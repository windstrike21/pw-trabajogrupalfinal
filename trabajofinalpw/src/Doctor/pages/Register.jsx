import DatosPersonales from '../components/Registro.DatosPersonales'
import DatosUsuario from '../components/Registro.DatosUsuario'
import ModoRegistro from '../components/Registro.ModoRegistro'

const Register = () => {
    return <>
        <header></header>
        <div class="container mb-3">
            <h1 class="mt-5 mb-5">Crea tu cuenta</h1>        
            <div class="row">
                <div class="col-lg-6">
                    <DatosPersonales />
                    <DatosUsuario />
                    <ModoRegistro />
                </div>                
                <div class="col-lg-6 text-end">
                    <img src="/pw-trabajogrupal/Doctor/Photos/LogoRegistro.png" class="img-fluid"/>
                </div>
            </div>
        </div>
        <footer></footer>
    </>
}

export default Register;