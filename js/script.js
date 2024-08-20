const listaNombresGastos = [];
const listaValoresGastos = [];

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

function limpiarCajas() {
    document.querySelector('#nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function actualizarListaGastos() {
    let htmlLista = '';
    let total = 0;
    const listaDeGastos = document.getElementById('listaDeGastos');
    const valorTotal = document.getElementById('totalGastos');

    listaDeGastos.innerHTML = '';
    listaNombresGastos.forEach((nombreGasto, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>
            ${nombreGasto}: US$${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;
        total += Number(valorGasto);
    });
    listaDeGastos.innerHTML = htmlLista;
    valorTotal.textContent = total.toFixed(2);

}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
    limpiarCajas();
}

