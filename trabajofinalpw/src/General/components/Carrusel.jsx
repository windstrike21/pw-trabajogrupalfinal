import React from 'react';
const Carrusel = () => {
    return <div key="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="/pw-trabajogrupal/Doctor/Photos/logomedicos.jpg" className="d-block w-100 rounded-3 hwmax" alt="..." />
                <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-3">
                    <h4>¡Separa ya tu cita!</h4>
                    <p>Encuentra a tu médico por especialidad y agenda una cita</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="/pw-trabajogrupal/Doctor/Photos/logomedicos3.jpeg" className="d-block w-100 rounded-3 hwmax" alt="..." />
                <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-3">
                    <h4>De vuelta al consultorio</h4>
                    <p>Atención presencial personalizada bajo los protocolos de bioseguridad</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/pw-trabajogrupal/Doctor/Photos/logomedicos2.png" className="d-block w-100 rounded-3 hwmax" alt="..." />
                <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-3">
                    <h5>Consulta desde casa</h5>
                    <p>Separa tu cita virtual con nuestros especialistas</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
}

export default Carrusel;