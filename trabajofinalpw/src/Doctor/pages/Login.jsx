import DatosUsuario from "../components/Login.DatosUsuario";
import ModoIngreso from "../components/Login.ModoIngreso";
const Login = () => {
    return <>
        <header></header>
        <div className="container mb-3">
            <h1 className="mt-5 mb-5">Accede a tu cuenta</h1>        
            <div className="row">        
                <div className="col-lg-6">
                    <DatosUsuario />                    
                    <ModoIngreso />
                </div>
                <div className="col-lg-6 text-center">
                    <img src="/pw-trabajogrupal/Doctor/Photos/Logo.png"/>
                </div>
            </div>
        </div>
        <footer></footer>
    </>
}

export default Login;