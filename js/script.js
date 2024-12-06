const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Alternar estilos adicionales si necesitas modificar más elementos
    if (document.body.classList.contains("dark-mode")) {
        document.querySelector("nav").style.backgroundColor = "#333";
    } else {
        document.querySelector("nav").style.backgroundColor = "#6f42c1";
    }
});
