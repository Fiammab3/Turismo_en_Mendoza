let datos = [
    {"id": 1, "actividad": "Bodega Catena Zapata"},
    {"id": 2, "actividad": "Rafting"},
    {"id": 3, "actividad": "Caminata Aconcagua"}
]

let act = prompt("Ingrese la actividad que desea realizar");


function verEnConsola () {
    console.log ("Actividad seleccionada:");
    console.log (act)
    for (let i=0; i<localStorage.length; i++) {
        console.log ("id: " + actividades [i].id + ", Nombre: " + [i].actividades);
    }
}

function guardarEnLocalStorage () {
    let actividadG = localStorage.getItem('actividades');
    if (actividadG) {
        return JSON.parse (actividadG);
    } else {
        return datos;
    }
}

let actividades = guardarEnLocalStorage();
verEnConsola();












