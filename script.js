const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
    
})
btnNo.addEventListener("touchstart", function (e) {
    moverAleatoriamente(e.target);
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón "SI" por su ID
    var btnSi = document.getElementById('btn-si');

    // Añadir el evento de clic al botón "SI"
    btnSi.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir que el enlace actúe inmediatamente
        alert('Bien lo sabía, ahora, dale en "Aceptar"...'); // Mostrar la alerta
        window.location.href = 'si3.html'; // Redirigir a otra página después de aceptar la alerta
    });
});
