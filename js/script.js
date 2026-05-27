function calcularImpacto() {
    const productoSel = document.getElementById("producto").value;
    const co2Estandar = document.getElementById("co2-estandar");
    const co2Eco = document.getElementById("co2-eco");
    const ecoTip = document.getElementById("eco-tip");

    if (productoSel === "zapatos") {
        co2Estandar.innerText = "14.2 kg CO2";
        co2Eco.innerText = "3.5 kg CO2";
        ecoTip.innerText = "Punto de recogida comercial cercano + empaque reciclado.";
    } else if (productoSel === "celular") {
        co2Estandar.innerText = "75.0 kg CO2";
        co2Eco.innerText = "18.4 kg CO2";
        ecoTip.innerText = "Envío consolidado aéreo optimizado y compensación de carbono.";
    } else if (productoSel === "camiseta") {
        co2Estandar.innerText = "6.8 kg CO2";
        co2Eco.innerText = "1.2 kg CO2";
        ecoTip.innerText = "Despacho en vehículo eléctrico local sin plásticos.";
    }
}

function mostrarEfectos() {
    let secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => {
        seccion.classList.add('reveal');
        let distancia = seccion.getBoundingClientRect().top;
        let alturaPantalla = window.innerHeight / 1.25;
        if (distancia < alturaPantalla) {
            seccion.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrarEfectos);
mostrarEfectos();