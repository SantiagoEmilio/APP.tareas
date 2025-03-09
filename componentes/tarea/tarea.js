import { crearItem } from "./itemcarta.js";

async function obtenerTareas() {
  try {
    const respuesta = await fetch("http://localhost:3000/tareas");
    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    return [];
  }
}

async function cargarCartas() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  const titulo = document.createElement("h2");
  titulo.textContent = "Mis Tareas";
  contenedor.appendChild(titulo);

  const lista = document.createElement("div");
  lista.className = "lista";

  const tareas = await obtenerTareas();

  tareas.forEach((item) => {
    const Item = crearItem(item);
    lista.appendChild(Item);
  });

  contenedor.appendChild(lista);
  return contenedor;
}

export { cargarCartas };
