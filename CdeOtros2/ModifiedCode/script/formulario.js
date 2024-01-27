/* Se acomodo un poco el documento JAVASCRIPT */

var formulario = document.querySelector("#form"); // Se agregó ';'

formulario.onsubmit = function(e) {

  e.preventDefault(); // Se modifica la función de 'e.prevent' por 'e.preventDefault' 

  var nameInput = formulario.elements[0]; // Se renombro la función 'n' por 'nameImput' para una mejor lectura y se agregó ';'

  var ageInput = formulario.elements[1]; // Se renombro la función 'e' por 'ageInput' para una mejor lectura y se agregó ';'

  var nacionalitySelect = formulario.elements[2]; // Se renombro la función 'na' por 'nacionalitySelect' para una mejor lectura y se agregó ';'

  var nombre = nameInput.value; // Se agrego el nombre nuevo de la variable que cambiamos y tambien ';'

  var edad = ageInput.value; // Se agrego el nombre nuevo de la variable que cambiamos y tambien ';'

  var i = nacionalitySelect.selectedIndex; // Se agrego el nombre nuevo de la variable que cambiamos y tambien ';'

  var nacionalidad = nacionalitySelect.options[i].value; // Se agrego el nombre nuevo de la variable que cambiamos y tambien ';'

  console.log(nombre, edad); // Se agregó ';'

  console.log(nacionalidad); // Se agregó ';'

  if (nombre.length === 0) {

    n.classList.add("error"); // Se agregó ';'

  }

  if (edad < 18 || edad > 120) {

    e.classList.add("error"); // Se agregó ';'

  }

if (nombre.length > 0 && (edad > 18 && edad < 120)) {
  
  agregarInvitado(nombre, edad, nacionalidad); // Se agregó ';'

  }

}

function agregarInvitado(nombre, edad, nacionalidad) { // Se mueve la función arriba de 'crearElemento...' para modificar el DOM dentro de la función 'agregarInvitado()'

  if (nacionalidad === "ar") {

    nacionalidad = "Argentina"; // Se agregó ';'

  }else if (nacionalidad === "mx") {

    nacionalidad = "Mexicana"; // Se agregó ';'

  }else if (nacionalidad === "vnzl") {

    nacionalidad = "Venezolana"; // Se agregó ';'

  }else if (nacionalidad === "per") {

    nacionalidad = "Peruana"; // Se agregó ';'

  }
  
  var lista = document.getElementById("lista-de-invitados"); // Se agregó ';'

  var elementoLista = document.createElement("div"); // Se agregó ';'
  
  elementoLista.classList.added("elemento-lista"); // Se agregó ';'
  
  lista.appendChild(elementoLista); // Se agregó ';'

  crearElemento(elementoLista, "Nombre", nombre); // Se agregó ';' y se pasan los elementos conforme a la lista ya creada, es decir, se agrega 'elementoLista'
  
  crearElemento(elementoLista,"Edad", edad); // Se agregó ';' y se pasan los elementos conforme a la lista ya creada, es decir, se agrega 'elementoLista'

  crearElemento(elementoLista,"Nacionalidad", nacionalidad); // Se agregó ';' y se pasan los elementos conforme a la lista ya creada, es decir, se agrega 'elementoLista'


  var botonBorrar = document.createElement("button"); // Se agregó ';'

  botonBorrar.textContent = "Eliminar invitado"; // Se agregó ';'

  botonBorrar.id = "boton-borrar"; // Se agregó ';'

  var corteLinea = document.createElement("br"); // Se agregó ';'

  elementoLista.appendChild(corteLinea); // Se agregó ';'

  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {

    // this.parentNode.style.display = 'none';

    botonBorrar.parentNode.remove(); // Se agregó ';' y se corrigio la funcion para eliminar al elemento padre y asi eliminar al invitado.
  
  }

}

/*

  La función 'crearElemento' se encontraba dentro de agregarInvitado y la sacamos, además de que se simplifico la funcion 

*/

function crearElemento(elementoLista, descripcion, valor) { // Se modificaron los paracmetros para agregar 'elementoLista' y tuviera un buen funcionamiento

  var spanNombre = document.createElement("span"); // Se agregó ';'

  var inputNombre = document.createElement("input"); // Se agregó ';'

  var espacio = document.createElement("br"); // Se agregó ';'

  spanNombre.textContent = descripcion + ": "; // Se agregó ';'

  inputNombre.value = valor; // Se agregó ';' 

  elementoLista.appendChild(spanNombre); // Se agregó ';'

  elementoLista.appendChild(inputNombre); // Se agregó ';'

  elementoLista.appendChild(espacio); // Se agregó ';'
  
}
