const listaNombresGastos = [];
const listaValoresGastos = [];

/* clickBoton: Función que se ejecuta cuando el usuario hace clic en el botón de agregar gasto */
function clickBoton() {
    let nombreGasto = '';
    let valorGasto = '';

    nombreGasto = document.querySelector('#nombreGasto').value;
    valorGasto = document.getElementById('valorGasto').value;

    alert('Se presionó el botón');

    if (nombreGasto !== '' && valorGasto !== '') {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);

        actualizarListaGastos();
        limpiarCajas();
    }

}

/* limpiarCajas: Función invocada luego de agregar un gasto, para dejar el formulario vacío */
function limpiarCajas() {
    document.querySelector('#nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

/* actualizarListaGastos: Función encargada de presentar en el navegador la lista de gastos registrados */
function actualizarListaGastos() {
    let htmlLista = '';
    let total = 0;
    const listaDeGastos = document.getElementById('listaDeGastos');
    const valorTotal = document.getElementById('totalGastos');

    listaDeGastos.innerHTML = '';
    listaNombresGastos.forEach((nombreGasto, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>
            ${nombreGasto}: US$ ${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;
        total += Number(valorGasto);
    });
    listaDeGastos.innerHTML = htmlLista;
    valorTotal.textContent = total.toFixed(2);

}

/* eliminarGasto: Función que recibe la posición del gasto a borrar, realiza el proceso y actualiza el navegador */
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
    limpiarCajas();
}

