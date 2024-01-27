// Tenemos un li de productos

const productos = [

  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},

  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},

  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},

  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},

  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}

] // Se modificaron las rutas de las imagenes 

const li = document.getElementById("lista-de-productos"); // Se agrego ; y además cambiamos el getElemnetByName por getElemnetById por el HTML.

const $i = document.querySelector('.input');


for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div"); // Se agrego ;

  d.classList.add("producto"); // Se agrego ;

  var ti = document.createElement("p"); // Se agrego ;

  ti.classList.add("titulo"); // Se agrego ;

  ti.textContent = productos[i].nombre; // Se agrego ;
  
  var imagen = document.createElement("img");

  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti); // Se agrego ;

  d.appendChild(imagen); // Se agrego ;

  li.appendChild(d); // Se agrego ;

}

function displayProductos(productos){ // Se agrego function para visualizar los productos
}

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {

  while (li.firstChild) {

    li.removeChild(li.firstChild);

  }

  const texto = $i.value;

  console.log(texto);

  const productosFiltrados = filtrado(productos, texto );


  for (let i = 0; i < productosFiltrados.length; i++) {

    var d = document.createElement("div"); // Se agrego ;

    d.classList.add("producto"); // Se agrego ;
  
    var ti = document.createElement("p"); // Se agrego ;

    ti.classList.add("titulo"); // Se agrego ;

    ti.textContent = productosFiltrados[i].nombre; // Se agrego ;

    var imagen = document.createElement("img");

    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti); // Se agrego ;

    d.appendChild(imagen); // Se agrego ;
  
    li.appendChild(d); // Se agrego ;
  }

}

const filtrado = (productos = [], texto) => {

  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));

}  