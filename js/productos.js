// productos.js

document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
      .then(response => response.json())
      .then(productos => {
        const productosContainer = document.querySelector(".productos-container");
        productos.forEach(producto => {
          // Crear una tarjeta por cada producto
          const productoCard = document.createElement("div");
          productoCard.classList.add("card");
  
          productoCard.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="precio">$ ${producto.precio}</p>
              <button class="btn btn-primary agregar-carrito">Agregar al carrito</button>
            </div>
          `;
  
          // Agregar la tarjeta al contenedor de productos
          productosContainer.appendChild(productoCard);
        });
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
      });
  });