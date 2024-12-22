// Inicializa el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartButton = document.getElementById("cart-button");
const cartCounter = document.getElementById("cart-counter");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartEmptyMessage = document.getElementById("cart-empty-message");
const botonPagar = document.getElementById("botonPagar");  // Referencia al botón Pagar

// Función para actualizar la vista del carrito
function updateCartView() {
  // Actualiza el contador de items en el icono del carrito
  cartCounter.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Limpia los items actuales en el modal y los vuelve a agregar
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartEmptyMessage.style.display = "block"; // Mostrar mensaje si el carrito está vacío
    botonPagar.style.display = "none"; // Ocultar el botón "Pagar"
  } else {
    cartEmptyMessage.style.display = "none"; // Ocultar mensaje si el carrito tiene productos
    cart.forEach((item, index) => {
      const itemRow = document.createElement("li");
      itemRow.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      itemRow.innerHTML = `
        ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
        <button class="btn btn-sm btn-primary increase" data-index="${index}">+</button>
        <button class="btn btn-sm btn-danger decrease" data-index="${index}">-</button>
        <button class="btn btn-sm btn-danger remove" data-index="${index}">Eliminar</button>
      `;
      cartItems.appendChild(itemRow);
    });
    botonPagar.style.display = "block"; // Mostrar el botón "Pagar" si el carrito tiene productos
  }

  // Calcula el total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Función para agregar un producto al carrito
function addToCart(item) {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateCartView();
}

// Función para manejar los eventos del carrito en el modal
cartItems.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  if (e.target.classList.contains("increase")) {
    cart[index].quantity++;
  } else if (e.target.classList.contains("decrease")) {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
  } else if (e.target.classList.contains("remove")) {
    cart.splice(index, 1);
  }
  updateCartView();
});

// Inicializa la vista del carrito al cargar la página
updateCartView();

// Ejemplo de cómo agregar un producto al carrito (esto debería ir en los botones de tus productos)
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const item = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: parseFloat(button.dataset.price),
    };
    addToCart(item);
  });
});

// Evento de clic en el botón de "Pagar"
document.getElementById("botonPagar").addEventListener("click", () => {
  // Redirigir al usuario a la página de simulación de pago
  window.location.href = "pago-simulado.html";
});