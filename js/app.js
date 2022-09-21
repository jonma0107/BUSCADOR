// ******************   VARIABLES de selectores  ************************
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimoPrecio = document.querySelector('#minimo');
const maximoPrecio = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un OBJETO con la busqueda para leer los datos
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',

}


// *****************************  EVENTOS  *******************************
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos); // muestra los automoviles

  // llena el select de años
  llenarSelect();

});

// *********************  Event listener para los select de búsqueda  *********************
marca.addEventListener('change', (e) => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();

});
year.addEventListener('change', (e) => {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();

});
minimoPrecio.addEventListener('change', (e) => {
  datosBusqueda.minimo = e.target.value;

  filtrarAuto();

});
maximoPrecio.addEventListener('change', (e) => {
  datosBusqueda.maximo = e.target.value;

  filtrarAuto();

});
puertas.addEventListener('change', (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);

  filtrarAuto();

});
transmision.addEventListener('change', (e) => {
  datosBusqueda.transmision = e.target.value;

  filtrarAuto();

});
color.addEventListener('change', (e) => {
  datosBusqueda.color = e.target.value;

  filtrarAuto();
});



// *******************************************  FUNCIONES  *****************************************/

// Función que MUESTRA LOS RESULTADOS
function mostrarAutos(autos) {

  limpiarHTML(); // eLIMINA el HTML previo

  autos.forEach(auto => {

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `

      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}

    `;

    // Insertar en el HTML
    resultado.appendChild(autoHTML);


  })
}
/**************************************************************************************************/

// Función LIMPIAR HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

/**************************************************************************************************/

// Función que LLena de Opciones el Select de años
function llenarSelect() {

  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // agrega las opciones de años al select

  }

}

/**************************************************************************************************/

// Función que filtra según la busqueda
function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmi).filter(filtrarColor); // Función de alto nivel o Funciones de orden mayor (higher order functions)

  mostrarAutos(resultado);

}

function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === datosBusqueda.puertas;
  }
  return auto;
}

function filtrarTransmi(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
}

