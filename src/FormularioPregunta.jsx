import React, { useState } from 'react';
import Swal from 'sweetalert2'

const FormularioPregunta = ({ addQuestion }) => {

    //VARIABLE DE ESTADO
    const [pregunta, setPregunta] = useState({
        enunciado: 'Enunciado',
        respuesta1: 'Respuesta1',
        respuesta2: 'Respuesta2',
        respuesta3: 'Respuesta3',
        respuesta4: 'Respuesta4',
        respuestacorrecta: -1,
        favorita: false
    });

    //FUNCION PARA CONTROLAR EL EVENTO DE CAMBIO DE CADA ELEMENTO
    const handleChange = (e) => {
        let nuevoValor = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        if (e.target.type === "radio") nuevoValor = parseInt(e.target.id[e.target.id.length - 1]);

        setPregunta({
            ...pregunta,
            [e.target.name]: nuevoValor
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí realizas las validaciones necesarias antes de agregar la pregunta
        // Verifica si los campos obligatorios están llenos, etc.
        if (pregunta.enunciado.trim() === '' || pregunta.respuesta1.trim() === '' || pregunta.respuesta2.trim() === '' || pregunta.respuesta3.trim() === '' || pregunta.respuesta4.trim() === '') {
            // Aquí podrías mostrar una alerta al usuario indicando que algunos campos son obligatorios
            alert('Por favor, completa el enunciado y todas las respuestas');
            return;
        }

        // Llamando a la función addQuestion que recibimos como prop
        addQuestion({
            ...pregunta
        });

        // Reinicia el estado para limpiar el formulario después de agregar la pregunta
        setPregunta({
            enunciado: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestacorrecta: 1,
            favorita: false
        });

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Pregunta añadida correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    };


    return (
        //En elemento usamos el spreed operator ... para crear una copia del estado y modificar
        //el valor que ha cambiado
        <form onSubmit={handleSubmit} >
            <textarea
                className="form-control mb-2"
                placeholder="Enunciado pregunta"
                name="enunciado"
                value={pregunta.enunciado}
                onChange={handleChange}
            />

            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck1"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 1"
                    className="form-control mb-2"
                    name="respuesta1"
                    htmlFor="inputCheck1"
                    value={pregunta.respuesta1}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck2"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 2"
                    className="form-control mb-2"
                    name="respuesta2"
                    htmlFor="inputCheck2"
                    value={pregunta.respuesta2}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck3"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 3"
                    className="form-control mb-2"
                    name="respuesta3"
                    htmlFor="inputCheck3"
                    value={pregunta.respuesta3}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input mb-2" id="inputCheck4"
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Respuesta 4"
                    className="form-control mb-2"
                    name="respuesta4"
                    htmlFor="inputCheck4"
                    value={pregunta.respuesta4}
                    onChange={handleChange}
                />
            </div>
            <div className="form-check form-switch form-check-reverse mb-2">
                <input type="checkbox" name="favorita" className="form-check-input " id="inputCheckFavourite" checked={pregunta.favorita}
                    //onChange={(e) => (setRegistroForm({...registroForm, priority: e.target.checked}))}/
                    onChange={handleChange} />
                <label className="form-check-label" htmlFor="inputCheckFavourite">Favorita</label>
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar
            </button>
        </form>
    )
};

export default FormularioPregunta;




