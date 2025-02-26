// formulario.js
import { crearItem } from "../tarea/itemcarta.js"; // Importa la función crearItem

export function formulario() {
  // Crear contenedor del formulario
  const form = document.createElement("div");
  form.className = "formulario";

  // Crear input para ingresar tareas
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ingresar la lista";

  // Crear botón para agregar tareas
  const button = document.createElement("button");
  button.textContent = "Agregar";

  // Agregar elementos al contenedor
  form.appendChild(input);
  form.appendChild(button);

  // Evento para agregar una nueva tarea
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del botón
    const nuevaTarea = input.value.trim(); // Obtiene el valor del input y elimina espacios en blanco

    if (nuevaTarea) {
      // Si el input no está vacío, crea un nuevo Item
      const nuevoItem = crearItem(nuevaTarea); // Usa la función crearItem
      const lista = document.querySelector(".lista"); // Selecciona el contenedor de la lista
      lista.appendChild(nuevoItem); // Agrega el nuevo Item a la lista
      input.value = ""; // Limpia el input
    } else {
      alert("Por favor, ingresa una tarea válida."); // Muestra un mensaje si el input está vacío
    }
  });

  return form;
}