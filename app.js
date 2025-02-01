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
            console.log(amigos);
        }
       
}



