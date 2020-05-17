document.querySelector('.agregarE').addEventListener('click', agregarE);
document.querySelector('.eliminarE').addEventListener('click', eliminarE);
let contenedorE = document.querySelector('.contentEtapas');
let numeroE = 1;

function agregarE() {
    numeroE++;
    var child = document.createElement('DIV');
    child.classList.add('divisorSecundario', `e${numeroE}`);
    child.innerHTML = `<div class="inputs">
        <input type="text" name="nomEntapa${numeroE}" placeholder="Nombre">
        <textarea class="tEtapa" name="descEtapa${numeroE}" cols="30" rows="10"
            placeholder="Descripcion de la etapa"></textarea>
    </div>`
    contenedorE.appendChild(child);
}

function eliminarE() {
    if (numeroE > 0) {
        let child = document.querySelector(`.e${numeroE}`);
        contenedorE.removeChild(child);
        numeroE--;
    }
}