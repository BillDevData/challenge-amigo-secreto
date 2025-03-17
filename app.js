// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaSorteo = "";
let listaAmigos = document.getElementById('listaAmigos'); //Asignando variable a elemento UL

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo != ""){
        listaSorteo.push(nuevoAmigo); //Agregando nuevo amigo al array del sorteo
        listaAmigos.innerHTML = ""; //Vaciar lista anterior (elemento UL) para crear nueva lista
        for (let i=0; i<listaSorteo.length;i++){
            let nombre = listaSorteo[i]; //Loop extrae cada nombre (texto)
            let listItem = document.createElement("LI"); //Creando elemento LI
            listItem.textContent = nombre; // Se le asigna el texto del nombre al elemento LI
            listaAmigos.appendChild(listItem); //Se le adiciona el elemento LI a UL. Se construye nueva lista
        }
        limpiarCaja(); //Limpiar caja luego de agregar nombre.
    } else {
        alert("Por favor, inserte un nombre"); //En caso de campo vacío
    }
}


function sortearAmigo(){
    let numElementos = listaSorteo.length;
    let resultado = document.getElementById('resultado'); //Se declara variable resultado, asociado al elemento UL del mismo nombre
    if (numElementos > 1){ //La función solo trabaja si es que hay 2 o más nombres registrados
        let numSorteo = parseInt(Math.floor(Math.random()*numElementos));
        listaAmigos.innerHTML = ""; //Vaciando lista para nuevo sorteo
        resultado.innerHTML = `Tu amigo secreto es: ${listaSorteo[numSorteo]}`; //Sortea el indice del array y muestra el resultado
        estadoInicial();
    } else {
        alert("Debes ingresar los nombres de más amigos");
    }
}


function limpiarCaja(){
    document.getElementById('amigo').value = ""
}

function estadoInicial(){
    listaSorteo = [];
}

estadoInicial();
