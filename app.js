"use strict";

const notaInput = document.querySelector("#notaInput");
const btnAgregar = document.querySelector("#btnAgregar");
const btnOrdenAsc = document.querySelector("#btnOrdenAsc");
const btnOrdenDesc = document.querySelector("#btnOrdenDesc");
const btnLimpiar = document.querySelector("#btnLimpiar");
const listaNotas = document.querySelector("#listaNotas");
const txtResumen = document.querySelector("#txtResumen");
const mensaje = document.querySelector("#mensaje");


/* ==========================================================
   1) ESTADO (array principal)
   ========================================================== */

/**
 * Array principal donde se almacenan todas las notas introducidas.
 * @type {number[]}
 */
let notas = []; // TODO: este array será el que uses en toda la práctica

/* ==========================================================
   2) REFERENCIAS AL DOM
   ========================================================== */

/**
 * Referencia al input numérico donde se introduce la nota.
 * @type {HTMLInputElement}
    
 */

/**
 * Botón para añadir una nota.
 * @type {HTMLButtonElement}
 */

/**
 * Botón para ordenar de menor a mayor.
 * @type {HTMLButtonElement}
 */

/**
 * Botón para ordenar de mayor a menor.
 * @type {HTMLButtonElement}
 */

/**
 * Botón para limpiar todas las notas.
 * @type {HTMLButtonElement}
 */

/**
 * Lista (ul) donde se mostrarán las notas.
 * @type {HTMLUListElement}
 */

/**
 * Párrafo donde se mostrará el resumen.
 * @type {HTMLParagraphElement}
 */

/**
 * Párrafo donde se mostrarán mensajes de error.
 * @type {HTMLParagraphElement}
 */


/* ==========================================================
   3) INICIALIZACIÓN (eventos)
   ========================================================== */

/**
 * Función principal de inicio: registra eventos y pinta el estado inicial.
 * @returns {void}
 */
function init() {
  // TODO: registrar los eventos de los botones (click)
    btnAgregar.addEventListener("click", agregarNota);
    btnOrdenAsc.addEventListener("click", ordenarAsc);
    btnOrdenDesc.addEventListener("click", ordenarDesc);
    btnLimpiar.addEventListener("click", limpiarTodo);
  // TODO: registrar el evento "Enter" en el input para que sea equivalente a añadir
    notaInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            agregarNota();
        }
    });
  // TODO: pintar el estado inicial (lista + resumen)
    pintarLista();
    pintarResumen();
}

init();


/* ==========================================================
   4) FUNCIONALIDADES PRINCIPALES
   ========================================================== */

/**
 * Lee el valor del input, lo valida y si es correcto lo añade al array.
 * Después debe actualizar la interfaz.
 * @returns {void}
 */
function agregarNota() {

  // TODO: leer el valor del input
  // TODO: convertirlo a número
    const valorNum = Number(notaInput.value);
  // TODO: validar que sea un número válido y esté entre 0 y 10
    if (Number.isNaN(valorNum)){
      mostrarMensaje("ERROR: El dato que has introducido es inválido");
      // TODO: si hay error, mostrar mensaje y salir
      return;
    }
    if (valorNum < 0 || valorNum > 10) {
      mostrarMensaje("ERROR: Debes introducir un número que este entre 0 y 10")
      return;
    } else {
      // TODO: si es correcto, hacer push al array "notas"
      notas.push(valorNum);
      // TODO: limpiar el input y devolver el foco al input
      notaInput.value = "";
      notaInput.focus();
      // TODO: llamar a render()
      render();
    }
}

/**
 * Ordena el array de notas de menor a mayor y actualiza la interfaz.
 * @returns {void}
 */
function ordenarAsc() {
  // TODO: ordenar el array de menor a mayor (recuerda que sort necesita comparador numérico)
  notas.sort((a, b) => (a - b));
  // TODO: llamar a render()
  render();
}

/**
 * Ordena el array de notas de mayor a menor y actualiza la interfaz.
 * @returns {void}
 */
function ordenarDesc() {
  // TODO: ordenar el array de mayor a menor
  notas.sort((a, b) => (b - a));
  // TODO: llamar a render()
  render();
}

/**
 * Elimina todas las notas, reinicia la interfaz y deja el estado vacío.
 * @returns {void}
 */
function limpiarTodo() {
  // TODO: vaciar el array de notas
  notas.length = 0;
  // TODO: llamar a render()
  render();
}


/* ==========================================================
   5) PINTADO DE LA INTERFAZ (render)
   ========================================================== */

/**
 * Actualiza completamente la interfaz:
 * - lista de notas
 * - resumen
 * @returns {void}
 */
function render() {
  // TODO: llamar a pintarLista()
  pintarLista();
  // TODO: llamar a pintarResumen()
  pintarResumen();
}

/**
 * Pinta el contenido del array en la lista <ul>.
 * @returns {void}
 */
function pintarLista() {
  // TODO: vaciar listaNotas (innerHTML)
  listaNotas.innerHTML = "";
  // TODO: recorrer "notas" y crear un <li> por cada nota
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    const li = document.createElement("li");
    li.textContent = nota;
    // TODO: añadir cada <li> al <ul>
    listaNotas.appendChild(li);
  }
  
}

/**
 * Pinta el resumen en txtResumen:
 * - total
 * - media
 * - máximo
 * - mínimo
 * - aprobados
 * - suspensos
 * @returns {void}
 */
function pintarResumen() {
  // TODO: si no hay notas, mostrar "Aún no hay notas."
  if (notas.length === 0) {
    mostrarMensaje("Aún no hay notas");
    return;
  } else { // TODO: si hay notas, calcular todos los valores (media, max, min, etc.)
      notas.innerHTML = `
      Total:  <br/>
      Media: ${} <br/>
      Máximo: ${calcularMax} <br/>
      Mínimo: ${calcularMin} <br/>
      Aprobados  <br/>
      Suspensos  <br/>
      `
  }
  // TODO: construir un texto resumen y asignarlo a txtResumen.textContent

}


/* ==========================================================
   6) CÁLCULOS (funciones auxiliares con arrays)
   ========================================================== */

/**
 * Calcula la media de un array numérico.
 * @param {number[]} array Array de números.
 * @returns {number} Media de los valores.
 */
function calcularMedia(array) {
  // TODO: sumar todos los elementos y dividir entre array.length
  const media;
  
  for (let i = 0; i < array.length; i ++) {
    let suma =+ array[i];
    return suma / notas;
  }
}

/**
 * Devuelve el valor máximo del array.
 * @param {number[]} array Array de números.
 * @returns {number} Valor máximo.
 */
function calcularMax(array) {
  // TODO: recorrer y guardar el máximo
  for (let i = 0; i < array.length; i++) {
    const max = array[i];
    if (max > i) {
      return;
      }
  }
}

/**
 * Devuelve el valor mínimo del array.
 * @param {number[]} array Array de números.
 * @returns {number} Valor mínimo.
 */
function calcularMin(array) {
  // TODO: recorrer y guardar el mínimo
  for (let i = 0; i < array.length; i++) {
    const min = array[i];
    if (min < i) {
      return;
    }
  }
}

/**
 * Cuenta cuántas notas están aprobadas (>= 5).
 * @param {number[]} array Array de números.
 * @returns {number} Número de aprobados.
 */
function contarAprobados(array) {
  // TODO: recorrer y contar >= 5
}


/* ==========================================================
   7) MENSAJES DE ERROR (sin alert)
   ========================================================== */

/**
 * Muestra un mensaje temporal en la web.
 * Debe desaparecer automáticamente después de unos segundos.
 * @param {string} texto Mensaje a mostrar.
 * @returns {void}
 */
function mostrarMensaje(texto) {
  // TODO: mostrar texto
  // TODO: programar que se borre después de X ms con setTimeout
  // TODO (opcional): si llega otro error antes de borrarse, evitar solapes
}

/**
 * Borra el mensaje actual de error.
 * @returns {void}
 */
function limpiarMensaje() {

}