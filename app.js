// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let amigoAgregado = document.getElementById("amigo").value;

    //Si el campo de texto está vacío
        if (amigoAgregado == "") {
            alert("Por favor, inserte un nombre.");
        } else {
            amigos.push(amigoAgregado);
            document.getElementById("amigo").value="";
            actualizarListaAmigos();
            console.log(amigos);
        }
       
}
//Función para actualizar la lista de amigos en HTML
function actualizarListaAmigos() {
    //Obtener el elemento de la lista (ul)
    let lista = document.getElementById("listaAmigos");

    //Limpiamos la lista antes de agregar nuevos amigos
    lista.innerHTML = "";

    // Hacer un bucle for para recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }

}

