import React from 'react';

const Pregunta = ({ pregunta, borrarPregunta }) => {
    const { id, enunciado, respuesta1, respuesta2, respuesta3, respuesta4 } = pregunta;

    const handleDelete = () => {
        // Lógica para abrir un modal de confirmación aquí
        const confirmarBorrado = window.confirm('¿Estás seguro de que quieres borrar esta pregunta?');
        if (confirmarBorrado) {
            borrarPregunta(id); // Llamada a la función para borrar la pregunta
        }
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="borrar-pregunta" onClick={handleDelete}>
                <span role="img" aria-label="Eliminar" style={{ backgroundColor: "red", color: "black", padding: "5px 10px", borderRadius: "50%", cursor: "pointer" }}>X</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">Pregunta nº{id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{enunciado}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    {/* ... Código para mostrar respuestas */}
                    <label className="btn btn-outline-danger">{respuesta1}</label>
                    <label className="btn btn-outline-danger">{respuesta2}</label>
                    <label className="btn btn-outline-danger">{respuesta3}</label>
                    <label className="btn btn-outline-danger">{respuesta4}</label>
                </div>
            </div>
        </div>
    );
};

export default Pregunta;
