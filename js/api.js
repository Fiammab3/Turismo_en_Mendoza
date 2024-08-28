let año = 2024; //defino el año que me interesa saber la información 

fetch(`https://api.argentinadatos.com/v1/feriados/${año}`)
    .then(response => response.json())  
    .then(data => {
        console.log(data);  // muestro datos en consola

        let feriadoContainer = document.querySelector("#userList");
        feriadoContainer.innerHTML = ''; //limpiamos el contenedor 

        // Iteramos sobre cada feriado en el array
        data.forEach(feriado => {
            // Crear un div para cada feriado
            let feriadoElement = document.createElement('div');
            feriadoElement.classList.add('user-card');

            // añadimos el contenido de cada feriado
            feriadoElement.innerHTML = `
                <p>Fecha: ${feriado.fecha}</p>
                <p>Tipo: ${feriado.tipo}</p>
                <p>Motivo: ${feriado.nombre}</p>
            `;

            // añadimos el div al contenedor principal
            feriadoContainer.appendChild(feriadoElement);
        });
    }) 
    .catch((error) => {
        console.log(error);
    })



