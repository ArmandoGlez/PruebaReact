import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  // Estado para almacenar los datos cargados
  const [data, setData] = useState(null);

  //para cargar los datos cuando el componente inicia
  useEffect(() => {
    // Función asincrónica para cargar datos de la API
    const fetchData = async () => {
      try {
        // Realizar una llamada a la API para obtener datos
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const jsonData = await response.json();
        // Actualizar el estado con los datos obtenidos
        setData(jsonData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    fetchData();

    // Limpiar los datos cuando el componente se desmonta
    return () => {
      setData(null);
    };
  }, []); // El segundo argumento es un arreglo vacío, lo que significa que este efecto se ejecutará solo una vez cuando el componente se monte

  return (
    <div>
      <h1>Ejemplo de useEffect en React</h1>
      {data ? (
        <div>
          <h2>Datos Cargados:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ExampleComponent;
