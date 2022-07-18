import React from 'react';
const Card = () => {
    return <div className="row card">
        <h2 className="py-3 text-center card-header">Acerca de nosotros</h2>
        <div className="p-3 card-body row">
            <div className="col">
                <div className="accordion" key="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" key="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h4>¿Quiénes somos?</h4>
                            </button>
                        </h2>
                        <div key="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body text-start">
                                Sómos una empresa que brinda información de calidad acerca de nuestros doctores registrados.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" key="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h4>¿Qué servicio proporcionamos?</h4>
                            </button>
                        </h2>
                        <div key="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body text-start">
                                Brindamos horarios flexibles para que pueda agendar su cita médica en la fecha y hora adecuadas.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" key="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <h4>Sobre sus datos de usuario</h4>
                            </button>
                        </h2>
                        <div key="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body text-start">
                                <li className="list-group-item border-0">Puede registrarse en nuestra plataforma cómo paciente para acceder al calendario de citas.</li>
                                <li className="list-group-item border-0">Respetamos sus datos personales, su información no será compartida.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;