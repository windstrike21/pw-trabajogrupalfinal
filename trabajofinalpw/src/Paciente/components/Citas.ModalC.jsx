import React from "react";
const ModalC = () => {
    return <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Calificar atención
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">Puntuación</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Comentario</span>
                        <textarea className="form-control" placeholder="(opcional)"
                            id="floatingTextarea"></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="button" onClick="" className="btn btn-primary" data-bs-dismiss="modal">
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default ModalC;