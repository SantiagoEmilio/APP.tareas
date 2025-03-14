export const tareas = [
    "alumno 1 ",
    "alumno 2",
    "alumno 3",
    "alumno 4",
    "alumno 5",
    "alumno 6",
    "alumno 7",
    "alumno 8"
];  


function consultarTareas(){
    fetch(` http://localhost:3000`)
    .then(response => response . json())
    .then(data = crossriginIsolated.log(data))
    .catch(error => console.error(`Error:`, error));
}
export{consultarTareas}