// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaSorteo = "";

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos'); //Asignando variable a elemento UL
    listaSorteo.push(nuevoAmigo); //Agregando nuevo amigo al array del sorteo
    listaAmigos.innerHTML = ""; //Vaciar lista anterior (elemento UL) para crear nueva lista
    for (let i=0; i<listaSorteo.length;i++){
        let nombre = listaSorteo[i]; //Loop extrae cada nombre (texto)
        let listItem = document.createElement("LI"); //Creando elemento LI
        listItem.textContent = nombre; // Se le asigna el texto del nombre al elemento LI
        listaAmigos.appendChild(listItem); //Se le adiciona el elemento LI a UL. Se construye nueva lista
    }
    limpiarCaja(); //Limpiar caja luego de agregar nombre.
}

function limpiarCaja(){
    document.getElementById('amigo').value = ""
}

function estadoInicial(){
    listaSorteo = [];
}

estadoInicial();
