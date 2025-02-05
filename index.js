import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { tarea } from "./componentes/tarea/tarea.js";

let DOM = document.getElementById('root');
DOM.appendChild(header());
DOM.appendChild(formulario());
DOM.appendChild(tarea());

