//Pre-entrega 3
let datos = `[
    {"id": 1, "actividad": "Bodega Catena Zapata"},
    {"id": 2, "actividad": "Rafting"},
    {"id": 3, "actividad": "Caminata Aconcagua"}
]`;

//Ingreso nuevo dato por prompt 
let nuevoDato = prompt("Ingrese la actividad que desea realizar: ");
let traspaso = JSON.parse(datos);

// Nuevo id (+ 1)
let nuevoId = traspaso.length + 1;

// Agregar el nuevo id a traspaso
traspaso.push({id: nuevoId, actividad: nuevoDato});

// Mostrar por consola lo agregado
console.log("La actividad ingresada por el usuario es: " + nuevoDato);

// Guardar en local Storage 
localStorage.setItem('Actividades', JSON.stringify(traspaso));

// Mostrar lo guardado en local Storage 
let verEnConsola = JSON.parse(localStorage.getItem('Actividades'));
verEnConsola.forEach((act) => {
    console.log("id: " + act.id + ", Actividad: " + act.actividad);
});


//Pre-entrega4
let formu = `[
    {
        "id": 1, 
        "nombre": "Marcela",
        "email": "marcela@outlook.com",
        "bodegaa": "Casa Vigil",
        "msg": "Bodega Casa vigil tour completo, Rafting, 4x4"
    },
    {
        "id": 2, 
        "nombre": "José",
        "email": "joser_@hotmail.com",
        "bodegaa": "",
        "msg": "Canopy, puenting, alojamiento en hoteles, y transportes"
    }
]`; 

//Convierto de Json a JavaScript 
let nuevoFormulario = JSON.parse (formu)

// Agrego un nuevo dato a mi formulario 
document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    let errores = []; 

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value; 
    let bodegaa = document.getElementById('bodegaa').value;
    let mensajee = document.getElementById('mensajee').value;
    
    let otroDato = {
        id: nuevoFormulario.length + 1, //itero
        nombre: nombre,
        email: email,
        bodegaa: bodegaa,
        mensajee: mensajee 
    };

    nuevoFormulario.push(otroDato); //agrego los datos nuevos 
    console.log (nuevoFormulario); //muestro por consola 

    // Paso a JSON
    localStorage.setItem('datos formulario', JSON.stringify(nuevoFormulario));

    // Mostrar lo guardado en Local Storage 
    document.getElementById('formulario').reset(); 
});


