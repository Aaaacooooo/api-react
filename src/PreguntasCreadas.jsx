import React from 'react';
import Pregunta from './Pregunta';

const PreguntasCreadas = ({ preguntas, borrarPregunta }) => {
    return (
        <div>
            <ul className="list-group">
                {preguntas.map(p => (
                    <li key={p.id} className="list-group-item">
                        <Pregunta pregunta={p} borrarPregunta={borrarPregunta} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreguntasCreadas;
