
import { tareas } from "./data.js";
import { crearItem } from "./itemcarta.js";

 function cargarCartas() {
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";
  
  const titulo = document.createElement("h2");
  titulo.textContent = "Mis Tareas"; 
  contenedor.appendChild(titulo);
  
  const lista = document.createElement("div");
  lista.className = "lista";
  
  tareas.forEach((item) => {
    const Item = crearItem(item); 
    lista.appendChild(Item);
  });

  contenedor.appendChild(lista);
  return contenedor;
}
export{cargarCartas}