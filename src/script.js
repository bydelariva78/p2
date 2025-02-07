// Función para cambiar el fondo entre modo día y noche
function toggleNightMode() {
    let body = document.body;
    let button = document.getElementById("toggleButton");
    
    // Verifica el estado actual del fondo y cambia al modo contrario
    if (body.classList.contains("night")) {
        body.classList.remove("night");
        body.style.backgroundColor = "#87CEEB"; // Azul claro (día)
        body.style.color = "black"; // Texto negro en modo día
        button.innerText = "Activar Modo Noche";
    } else {
        body.classList.add("night");
        body.style.backgroundColor = "#001f3f"; // Azul oscuro (noche)
        body.style.color = "white"; // Texto blanco en modo noche
        button.innerText = "Activar Modo Día";
    }
}
