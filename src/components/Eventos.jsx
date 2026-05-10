
/*importacion de 2 funciones (hooks) desde React para poder usarlas dentro del componente.*/ 
/*{ useState, useEffect } son funciones específicas que se requieren para la interactividad de un componente React.*/ 
import { useState, useEffect } from 'react';


function Eventos() {
  // Estado del contador
  const [visitas, setVisitas] = useState(0);

  // Estado de eventos
  const [eventos, setEventos] = useState([]);

  // Estado de carga
  const [cargando, setCargando] = useState(true);

  // Estado para mostrar/ocultar
  const [mostrar, setMostrar] = useState(false);

  // useEffect para simular carga
  useEffect(() => {
    setTimeout(() => {
      setEventos([
        "Concierto",
        "Boda",
        "Cumpleaños",
        "Conferencia"
      ]);
      setCargando(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Panel de Eventos Interactivos</h2>

      {/* Contador */}
      <p>Visitas: {visitas}</p>
      <button onClick={() => setVisitas(visitas + 1)}>
        Visitar
      </button>

      <hr />

      {/* Mensaje */}
      {cargando ? <p>Cargando eventos...</p> : <p>Eventos disponibles</p>}

      {/* Botón mostrar */}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar eventos" : "Mostrar eventos"}
      </button>

      {/* Lista */}
      {mostrar && !cargando && (
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>{evento}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Eventos;