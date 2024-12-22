document.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.querySelector(".productos-container");
  const filtroCategoria = document.getElementById("filtro-categoria");

  let productos = [];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Cargar productos desde el archivo JSON
  fetch("productos.json")
    .then((response) => response.json())
    .then((data) => {
      productos = data;
      mostrarProductos(productos); // Mostrar todos los productos al cargar
    })
    .catch((error) => console.error("Error al cargar los productos:", error));

  // Función para mostrar productos
  function mostrarProductos(listaProductos) {
    productosContainer.innerHTML = ""; // Limpiar contenido
    listaProductos.forEach((producto) => {
      const productoCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-title"><strong>Categoría: </strong>${producto.categoria}</p>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-precio">$${producto.precio}</p>
              <button class="btn btn-primary agregar-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`;
      productosContainer.insertAdjacentHTML("beforeend", productoCard);
    });
  }

  // Filtrar productos por categoría
  filtroCategoria.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const categoria = e.target.getAttribute("data-categoria");
      const productosFiltrados = categoria === "all" 
          ? productos 
          : productos.filter((producto) => producto.categoria === categoria);
      mostrarProductos(productosFiltrados);
    }
  });

  // Actualización del carrito con botones alineados a la derecha
function actualizarCarrito() {
  const contador = document.getElementById("cart-counter");
  const items = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const mensajeVacio = document.getElementById("cart-empty-message");

  contador.textContent = carrito.length;

  // Si el carrito está vacío, mostrar el mensaje de carrito vacío
  if (carrito.length === 0) {
    mensajeVacio.style.display = "block";
    items.innerHTML = "";  // Limpiar la lista de productos
    total.textContent = "0";  // Total a 0 sin el signo $
  } else {
    mensajeVacio.style.display = "none";
    items.innerHTML = carrito.map((item, index) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.nombre} (x${item.cantidad}) - $${(item.precio * item.cantidad).toFixed(2)}
        <div class="action-buttons">
          <button class="btn btn-sm btn-primary aumentar" data-index="${index}">+</button>
          <button class="btn btn-sm btn-danger disminuir" data-index="${index}">-</button>
          <button class="btn btn-danger btn-sm eliminar-item" data-index="${index}">Eliminar</button>
        </div>
      </li>
    `).join("");

    // Calculamos el total
    const totalAmount = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    total.textContent = totalAmount.toFixed(2);  // Mostramos el total con 2 decimales
  }

  // Guardamos el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
     
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(index) {
    carrito.splice(index, 1);  // Elimina el producto por su índice
    actualizarCarrito();
  }

  // Función para aumentar la cantidad de un producto
  function aumentarCantidad(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
  }

  // Función para disminuir la cantidad de un producto
  function disminuirCantidad(index) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    } else {
      carrito.splice(index, 1);  // Eliminar el producto si la cantidad es 1
    }
    actualizarCarrito();
  }

  // Agregar productos al carrito
  productosContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-carrito")) {
      const id = parseInt(e.target.dataset.id);
      const nombre = e.target.dataset.nombre;
      const precio = parseFloat(e.target.dataset.precio);

      // Verificar si el producto ya está en el carrito
      const productoExistente = carrito.find(item => item.id === id);
      if (productoExistente) {
        // Si ya existe, incrementar la cantidad
        productoExistente.cantidad += 1;
      } else {
        // Si no existe, agregar el producto con cantidad 1
        carrito.push({ id, nombre, precio, cantidad: 1 });
      }

      actualizarCarrito();
    }
  });

  // Eliminar productos del carrito
  document.getElementById("cart-items").addEventListener("click", (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains("eliminar-item")) {
      eliminarDelCarrito(index);
    } else if (e.target.classList.contains("aumentar")) {
      aumentarCantidad(index);
    } else if (e.target.classList.contains("disminuir")) {
      disminuirCantidad(index);
    }
  });

  // Mostrar el carrito al hacer clic en el icono del carrito
  document.getElementById("cart-button").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("cartModal"));
    modal.show();
  });

  // Inicializar vista del carrito al cargar
  actualizarCarrito();


  document.getElementById("cartModal").addEventListener('hidden.bs.modal', () => {
    // Se restablece el backdrop para que la web vuelva a ser interactiva
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  });
});

// Al cargar la página, se asegura de que el carrito se cargue siempre
function cargarCarritoDesdeLocalStorage() {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  actualizarCarrito();  // Actualiza el carrito para reflejar los datos almacenados
}

// Llamar esta función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarCarritoDesdeLocalStorage(); // Asegurarse de que se lea el carrito cuando se cargue cualquier página
});
