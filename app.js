// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let amigoAgregado = document.getElementById("amigo").value;

        if (amigoAgregado == "") {
            alert("Por favor, inserte un nombre."); //Si el campo de texto está vacío
        } else {
            amigos.push(amigoAgregado); //Agrego el nombre al array de amigos
            document.getElementById("amigo").value="";
            actualizarListaAmigos(); //Sumo el nombre a la lista
            console.log(amigos);
        }
       
}
//Función para actualizar la lista de amigos en HTML
function actualizarListaAmigos() {
    //Obtener el elemento de la lista (ul)
    let lista = document.getElementById("listaAmigos");

    //Limpiamos la lista antes de agregar nuevos amigos
    lista.innerHTML ="";

    // Hacer un bucle for para recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }

}

function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random(amigos.indexOf)*amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    if (amigos == "") {
        alert("Por favor ingrese nombres para realizar el sorteo");
    } else {
        console.log(indiceSorteado);
        console.log(amigoSorteado);
        document.getElementById("resultado").innerHTML = amigoSorteado; 
    }

}
