# Peditutupper  
**Desarrollado por Paola Fraticola**  
📧 paofraticola@gmail.com

---

## Descripción  
Peditutupper es una página web donde los usuarios pueden ver productos Tupperware, leer reseñas, contactar al equipo de ventas y disfrutar de contenido adicional. La página fue creada para que los clientes puedan navegar fácilmente por la tienda, acceder a información y conectar de manera rápida con la marca.

---

## Tecnologías Utilizadas  

- **HTML5** 🎨 - Estructura básica de la página.
- **CSS3** y **Bootstrap 5** 📱 - Estilos consistentes, diseño responsivo y componentes (carrusel, tarjetas, formularios).
- **Font Awesome** 🔗 - Iconos para redes sociales, mejorando el acceso a las plataformas de la marca.
- **Google Fonts (Poppins)** ✍️ - Tipografía principal de la página, con un diseño limpio y moderno.
- **Formspree** 📧 - Servicio que permite enviar datos del formulario de contacto a un correo electrónico sin necesidad de backend.
- **JavaScript** 💻 - Funcionalidades interactivas como el carrito de compras, la implementación del modo oscuro/claro y la carga dinámica del footer, menú hamburguesa.

---

## Estructura del Sitio Web

├── index.html                # Página principal con productos y carrusel

├── form.html                 # Página de contacto con video y formulario

├── footer.html               # Página donde esta desarrollado el footer

├── pago-simulado.html        # Página donde es simulado el mensaje de pago exitoso (no utilizado aún)

├── css/
│   └── styles.css            # Archivo de estilos personalizado

├── img/                      # Carpeta de imágenes (logo y demás)

└── video/
    └── receta-banana.mp4     # Video de receta aleatoria en la sección de contacto

└── js/
│   └── script.js             # Lógica para el modo oscuro/claro y llamada dinámica al footer
│   └── carrito.js            # Lógica para el carrito de compras
│   └── productos.js          # Lógica para la visualización y filtrado de productos

---

## Características  

1. **Página de Inicio** 🏠: Carrusel de imágenes destacando productos populares. *(Bootstrap y Flex)*
2. **Sección de Productos** 🛍️: Visualización de productos Tupperware con descripciones y selección de categorías. Incluye opción de ver más. *(Flex)*
3. **Sección de Reseñas** ⭐: Valoraciones de clientes para reforzar la confianza de futuros compradores. *(Grid y CSS para avatares redondeados)*
4. **Formulario de Contacto** 📬: Permite a los usuarios enviar mensajes. Utiliza Formspree para procesar las solicitudes sin backend. *(Responsive con Media Queries y `required` en HTML)*
5. **Multimedia** 🎥: Video en MP4 en la sección de contacto, con puntas redondeadas y fondo de color en el contenedor.
6. **Footer** 📎: Contiene enlaces a redes sociales de la marca y un crédito de diseño. *(Bootstrap y Flex)*
7. **Favicon** 🖼️: Se ha añadido un favicon a todos los archivos HTML para una mejor personalización.
8. **Modo Oscuro y Claro** 🌙🌞: Funcionalidad que permite a los usuarios alternar entre el modo oscuro y el modo claro para mejorar la experiencia de usuario según sus preferencias. *(JavaScript)*
9. **Carrito de Compras** 🛒: Los usuarios pueden agregar productos al carrito, ver el contenido del carrito, modificar cantidades y eliminar productos. *(LocalStorage y JavaScript)*
10. **Carga Dinámica del Footer** 📋: El footer se carga de manera dinámica utilizando JavaScript, permitiendo centralizar la lógica de los elementos repetitivos. *(JavaScript)**

---

## Funcionalidades en JavaScript  

### 1. **Carrito de Compras**  
   - **Agregar productos al carrito**: Los usuarios pueden agregar productos a su carrito desde la página de productos. Cada producto se guarda en el carrito con su cantidad y precio.
   - **Modificar el carrito**: Los usuarios pueden aumentar o disminuir la cantidad de productos, o eliminar productos del carrito.
   - **Persistencia en LocalStorage**: El carrito se guarda en el navegador del usuario utilizando LocalStorage, lo que permite mantener el carrito entre recargas de la página.
   - **Visualización del carrito**: Un modal muestra el contenido del carrito, el total y las opciones para modificar las cantidades o eliminar productos.
   - **Actualización dinámica**: Cada vez que el carrito se actualiza, los datos del carrito se reflejan inmediatamente en la interfaz.

### 2. **Modo Oscuro y Claro**  
   - **Alternar entre modos**: Los usuarios pueden cambiar entre el modo oscuro y el modo claro mediante un interruptor. El estado del modo se guarda en LocalStorage para que se mantenga entre recargas.
   - **Estilo dinámico**: Los colores de fondo, texto y botones cambian automáticamente según el modo seleccionado para mejorar la accesibilidad y la experiencia de usuario.

### 3. **Llamada Dinámica al Footer**  
   - El footer del sitio se carga dinámicamente mediante JavaScript desde el archivo `script.js`, lo que permite mantener el código más organizado y reutilizable en diferentes páginas.
   - La función en `script.js` inserta el contenido del footer (como las redes sociales y créditos) directamente en el HTML de la página al cargarla.

### 4. **Menú Hamburguesa** 
   - El sitio utiliza el menú hamburguesa 🍔 de Bootstrap para una navegación más accesible en dispositivos móviles. El menú se adapta automáticamente a diferentes tamaños de pantalla y permite que el usuario vea las opciones de navegación de manera eficiente.

---   

## Meta y SEO  
Se incluyeron las meta etiquetas necesarias para SEO y mejorar la accesibilidad del sitio. El sitio está optimizado para motores de búsqueda y se usan etiquetas para un contenido semántico y accesible.

---

## Instalación y Uso

1. Clonar el repositorio o descargar el archivo ZIP.
2. Abrir el archivo `index.html` en un navegador.
3. Personalizar contenido como imágenes y enlaces en el archivo `index.html`, `form.html` y `styles.css`.
4. Modificar la lógica del carrito, el modo oscuro/claro o la carga del footer en los archivos JavaScript si es necesario.

---

## Licencia  

Este proyecto está bajo la Licencia MIT. 

---

## Contacto  

Si tienes preguntas o necesitas soporte, no dudes en contactar a Paola Fraticola:  
📧 paofraticola@gmail.com