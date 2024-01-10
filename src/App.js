import React, { useState } from 'react';
import './App.css';
import FormularioPregunta from './FormularioPregunta';
import PreguntasCreadas from './PreguntasCreadas';

const App = () => {
  //VARIABLE DE ESTADO PARA GUARDAR LAS PREGUNTAS CREADAS
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nuevaPregunta) => {
    let idactual = 1;
    const id = idactual; // Generar un ID único (puedes usar otro método más seguro)
    idactual++;
    nuevaPregunta.id = id;
    setPreguntas([...preguntas, nuevaPregunta]);
  };
  // Función para borrar una pregunta por su ID
  const borrarPregunta = (id) => {
    const nuevasPreguntas = preguntas.filter((pregunta) => pregunta.id !== id);
    setPreguntas(nuevasPreguntas);
  };

  return (
    <div className="App">

      <h1>Formulario de Preguntas</h1>
      <FormularioPregunta addQuestion={addQuestion} />


      <h2>Preguntas Creadas</h2>
      <PreguntasCreadas preguntas={preguntas} borrarPregunta={borrarPregunta} />
    </div>

  );
};

export default App;
