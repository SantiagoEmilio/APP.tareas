import { tareas } from "./data.js";

export function tarea() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";
  
  const titulo = document.createElement("h2");
  titulo.textContent = "Mis Tareas"; // Puedes agregar un título si lo deseas
  contenedor.appendChild(titulo);
  
  const lista = document.createElement("div");
  lista.className = "lista";
  
  tareas.forEach((item) => {
    const Item = document.createElement("div");
    Item.className = "Item";

    Item.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${item}</span>`;
    
    const checkbox = Item.querySelector(".task-checkbox");
    const taskText = Item.querySelector(".task-text");

    // Agregar el evento click al contenedor completo del item
    Item.addEventListener("click", (e) => {
      // Verificar si el click fue sobre el checkbox
      if (e.target === checkbox) {
        // Si el click fue sobre el checkbox, evitar cambiar el estado de la tarea
        return;
      }

      // Si el click no fue sobre el checkbox, cambiar su estado
      checkbox.checked = !checkbox.checked;
      // Aplicar o quitar el tachado basado en el estado del checkbox
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
    });

    lista.appendChild(Item);
  });

  contenedor.appendChild(lista);
  return contenedor;
}

export { tareas };
