import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { cargarCartas } from "./componentes/tarea/tarea.js";
import { marcarTarea } from "./componentes/tarea/funcionestareas.js";

function cargarDom() {
  let DOM = document.getElementById('root');
  DOM.appendChild(header());
  DOM.appendChild(cargarCartas()); 
  DOM.appendChild(formulario());

  marcarTarea(); 
}

cargarDom();
