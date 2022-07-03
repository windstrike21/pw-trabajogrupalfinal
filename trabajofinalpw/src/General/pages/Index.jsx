import Header from "../components/Header";
import Carrusel from "../components/Carrusel";
import Card from "../components/Card";
import Footer from "../components/Footer";
 
const Index = () => {
    return <>
        <Header />
        <div className="m-3 p-5 text-center border rounded-3 bg-light">
            <h1 className="py-2 mb-5 rounded-3">Encuentre a su especialista en medicina</h1>
            <Carrusel />
            <div className="row mt-5">
                <div className="col-lg-6">
                    <Card />
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded-3 border border-4" src="#"/>
                </div>           
            </div>
        </div>
        <Footer />
    </>
}

export default Index;