// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//agregar un array para almacenar los nombres
let amigos = [];

//cambio de texto
function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}


asignarTextoElemento('h1','El Amigo Secreto');
asignarTextoElemento('h2','Introduzca el nombre de sus amigos:');
asignarTextoElemento('button','Agregar');

// limpiar el input
function vaciarInput() {
document.getElementById('listaAmigos').innerHTML = "";

}

//solo acepta letras el input



//agregar funcion para agregar amigos
function agregarAmigo(){

    let nombreDeAmigo = document.getElementById("amigo").value;

    //solo letras y espacios
    


    // validar la entrada

    if (nombreDeAmigo.trim() === "") {
        alert("Por favor ingrese un nombre para poder agregarlo")
        return;
    } else {

    if (amigos.includes(nombreDeAmigo)){
        alert('Este nombre ya ha sido agregado');
        document.getElementById("amigo").value = "";    
        return;
    } else {
      
      let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombreDeAmigo)) {
      alert("El nombre solo puede contener letras y espacios");
      return;
    }

    //añadir nombre a la lista

    amigos.push(nombreDeAmigo);

    agregarNombreAmigo();

    // limpiar el campo de entrada

    document.getElementById("amigo").value = "";
    }
    }
}

// actualizar la visualizacion de la lista de nombres ingresados

function agregarNombreAmigo() {
  const lista = document.getElementById('listaAmigos');
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

//sortear amigo

function sortearAmigo() {
    vaciarInput();
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  } else {
    if (amigos.length < 2) {
    alert("Por favor introduzca al menos dos nombres para sortear.");
    agregarNombreAmigo();
    return;

    }

  }

  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  const amigoSorteado = amigos[indiceAleatorio];
  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;

document.getElementById('resetear').removeAttribute('disabled');


}

function iniciarSorteo() {
amigos = [];
document.getElementById('amigo').value = "";
document.getElementById('listaAmigos').innerHTML = "";
document.getElementById('resultado').innerHTML = "";

document.getElementById('resetear').setAttribute('disabled','true');

}
