function crearItem(tarea) {
  const item = document.createElement("div");
  item.className = "tarea";

  const descripcion = document.createElement("p");
  descripcion.textContent = tarea.descripcion;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarea.completada;
  checkbox.addEventListener("change", async () => {
    await fetch(`http://localhost:3000/tareas/${tarea.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completada: checkbox.checked }),
    });
  });

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/tareas/${tarea.id}`, { method: "DELETE" });
    item.remove();
  });

  item.appendChild(checkbox);
  item.appendChild(descripcion);
  item.appendChild(botonEliminar);

  return item;
}

export { crearItem };
