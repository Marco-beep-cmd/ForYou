document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById("rain-container");

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");

        // Añadir el emoji de rosa 🌹
        rose.textContent = "🌹"; 

        // Posiciona la rosa en un lugar aleatorio en la parte superior
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = 3 + Math.random() * 2 + "s"; // Duración de caída aleatoria
        rose.style.opacity = Math.random(); // Transparencia aleatoria

        rainContainer.appendChild(rose);

        // Elimina la rosa después de que caiga
        setTimeout(() => {
            rose.remove();
        }, 5000);
    }

    // Crear rosas constantemente
    setInterval(createRose, 300);
});
