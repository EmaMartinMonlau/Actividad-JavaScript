function comparar() {
    const palabra1 = document.getElementById("textcomp1").value;
    const palabra2 = document.getElementById("textcomp2").value;
    const comparacion = document.getElementById("comparacion");
    
    if (palabra1 === palabra2) {
        comparacion.src = "imagenes/igual.png";
    } else {
        comparacion.src = "imagenes/desigual.png";
    }
}

const palabra1 = document.getElementById("textcomp1");
const palabra2 = document.getElementById("textcomp2");

palabra1.addEventListener("keyup", comparar);
palabra2.addEventListener("keyup", comparar);

function contarletras() {
    const palabra = document.getElementById("textcontar").value;
    const contador = document.getElementById("totales").value = palabra.length;
    const totalLetras = palabra.length;

    if (totalLetras == 30) {
        alert("Has alcanzado las 30 letras!");
        
    }
}

const textcontar = document.getElementById("textcontar");
textcontar.addEventListener("keyup", contarletras);

//EJERCICIO 3
function cambiocolor() {
    const headerColor = document.querySelector('input[name="headerColor"]:checked').value;
    document.querySelector("header").style.backgroundColor = `var(--color-hf${headerColor})`;
    const footerColor = document.querySelector('input[name="footerColor"]:checked').value;
    document.querySelector("footer").style.backgroundColor = `var(--color-hf${footerColor})`;
}

const headerRadios = document.querySelectorAll('input[name="headerColor"]');
headerRadios.forEach(radio => {
    radio.addEventListener("change", cambiocolor);
});

const footerRadios = document.querySelectorAll('input[name="footerColor"]');
footerRadios.forEach(radio => {
    radio.addEventListener("change", cambiocolor);
});

//EJERCICIO 4 CAMBIAR TAMAÑO IMAGEN

      