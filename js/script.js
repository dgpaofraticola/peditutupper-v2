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


// Función para cargar el contenido de header y footer

    fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el footer:', error));

    