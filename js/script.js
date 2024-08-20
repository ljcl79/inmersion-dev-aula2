const listaNombresGastos = [];
const listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = '';
    let valorGasto = '';

    nombreGasto = document.querySelector('#nombreGasto').value;
    valorGasto = document.getElementById('valorGasto').value;

    alert('Se presionó el botón');

    if (nombreGasto === '' || valorGasto === '') {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);

        actualizarListaGastos();
    }

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
            ${nombreGasto}: $${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;
        total += Number(valorGasto);
    });
    listaDeGastos.innerHTML = htmlLista;
    valorTotal.textContent = total.toFixed(2);

}

