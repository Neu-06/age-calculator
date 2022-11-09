const botom = document.getElementById("boton")
const h3 = document.getElementById("h3")
const h = document.getElementById("h");

function mensaje () {
    const nom = document.getElementById("nombre").value;
    const age = document.getElementById("edad").value;
    h3.textContent= "Hola " + nom + " su edad es "+ age + "."
    h.textContent= "Gracias por usar la calculadora :D"
}
botom.addEventListener("click", mensaje)