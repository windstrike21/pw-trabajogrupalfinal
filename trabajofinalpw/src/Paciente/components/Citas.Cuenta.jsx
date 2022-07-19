import React from "react";
import AvatarP from '../images/default-avatar.png'
const Cuenta = () => {
    return <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={AvatarP} className="img-fluid ms-5 my-3 d-block p-4 border-end border-2" alt="..." width="200" />
            </div>
            <div className="col-md-8 align-self-center">
                <div className="card-body">
                    <h2 className="card-title">Mi cuenta</h2>
                    <p className="card-text bg-opacity-50">Email: rodrigon_5@hotmail.com</p>
                </div>
            </div>
        </div>
    </div>
}
export default Cuenta;