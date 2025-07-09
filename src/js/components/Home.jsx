
import React, { useState } from "react";
import "/workspaces/TodoListReact-DiegoAmorin33/src/styles/index.css";

const Home = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const manejarCambio = (e) => {
    setTarea(e.target.value);
  };

  const manejarEnter = (e) => {
    if (e.key === "Enter" && tarea.trim() !== "") {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (indexAEliminar) => {
  setLista(lista.filter((_, index) => index !== indexAEliminar));
};


  return (
    <div className="Stacked">
      <div className="card-shadow sombra1"></div>
      <div className="card-shadow sombra2"></div>
      <div className="main-card">
        <input
          type="text"
          placeholder="No hay tareas, añadir tareas?"
          value={tarea}
          onChange={manejarCambio}
          onKeyDown={manejarEnter}
        />
       <ul>
          {lista.map((item, index) => (
            <li key={index} className="tarea-item">
              <span>{item}</span>
              <button
                className="boton-eliminar" onClick={() => eliminarTarea(index)}> X
              </button>
            </li>
          ))}
        </ul>
        <p className="count">{lista.length} Tareas pendientes</p>
      </div>
    </div>
  );
};

export default Home;
