import { tareas } from "./data.js";

export function tarea() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";
  
  const titulo = document.createElement("h2");
  titulo.textContent = "Mis Tareas"; 
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

    Item.addEventListener("click", (e) => {
      if (e.target === checkbox) {
        return;
      }

      checkbox.checked = !checkbox.checked;
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
