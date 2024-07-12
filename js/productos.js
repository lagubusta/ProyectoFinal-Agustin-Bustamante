// Div contenedor de lista de productos
const divListaProductos = document.createElement('div');
divListaProductos.id = ('product-list');
cuerpo.appendChild(divListaProductos);
divListaProductos.style.padding = '1rem'
divListaProductos.style.display = 'flex';
divListaProductos.style.flexWrap = 'wrap';

// Div contenedor de carrito de compras
const divCarrito = document.createElement('div');
divCarrito.id = ('cart');
cuerpo.appendChild(divCarrito);
divCarrito.style.fontFamily = 'buda';
divCarrito.style.color = colorAmarillo;
divCarrito.style.fontSize = '18px';
divCarrito.style.padding = '6rem';

// Div contenedor de historial de compras
const divHistorialCompras = document.createElement('div');
divHistorialCompras.id = ('historial-compras');
cuerpo.appendChild(divHistorialCompras);
divHistorialCompras.style.padding = '1rem';
divHistorialCompras.style.display = 'none';

// Array de productos.
const products = [
    { id: 1, nombre: "UK-JAPAN-EEUU-EU Black", precio: 19000 },
    { id: 2, nombre: "Dark Side of the Moon", precio: 25000 },
    { id: 3, nombre: "Dark Side of the Moon 1973", precio: 20000 },
    { id: 4, nombre: "The Wall", precio: 23000 },
    { id: 5, nombre: "UK-JAPAN-EEUU-EU Black", precio: 19000 },
    { id: 6, nombre: "Buzo The Wall", precio: 15000 },
];

// Local Storage con carrito
let cart = recuperrarCarrito();
function addToCart(productId, cantidad) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.cantidad += cantidad;
        if (cartItem.cantidad <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            cartItem.subTotal = cartItem.cantidad * product.precio;
        }
    } else {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: cantidad,
            subTotal: cantidad * product.precio,
        });
    }
    guardarCarritoEnLocalStorage();
    renderCart();

    // Sweet Alert cargado al carrito
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        iconColor: '#23003a',
        title: `${product.nombre} está en el carrito`,
        color: '#23003a',
        background: colorAmarillo,
    });
}
// Calcular total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.subTotal, 0);
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productList.style.display = 'flex';
    productList.style.textAlign = 'center';
    productList.style.justifyContent = 'center';
    productList.style.alignItems = 'center';
    productList.style.verticalAlign = 'middle';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.id = 'productDivId';
        productDiv.innerHTML = `
            <img src="./img/f${product.id}.webp" alt="foto${product.id}">
            <p>${product.nombre} - $${product.precio}</p> <br><hr><br>
            <button onclick="addToCart(${product.id}, 1)">Agregar al carrito</button>
        `;
        productList.appendChild(productDiv);
        productDiv.style.backgroundColor = '#150320';
        productDiv.style.padding = '1rem';
        productDiv.style.color = '#b88d00';
        productDiv.style.textAlign = 'center';
        productDiv.style.minHeight = '12rem';
        productDiv.style.flexBasis = 'calc(33.33% - 2rem)';
        productDiv.style.margin = '1rem';
        productDiv.style.boxSizing = 'border-box';
        productDiv.style.overflow = 'hidden';
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.backgroundColor = '#4c1e69';
    cartDiv.style.padding = '1rem';
    cartDiv.style.display = 'flex';
    cartDiv.style.flexDirection = 'column';
    cartDiv.innerHTML = '';

    cart.forEach(item => {
        const cartItemDiv = document.createElement('table');
        cartItemDiv.id = 'idTabla';
        cartItemDiv.style.backgroundColor = '#150320';
        cartItemDiv.style.padding = '1rem';
        cartItemDiv.style.width = '100%';

        // Crear una fila (tr) para cada elemento del carrito
        const fila = document.createElement('tr');

        // Celda para el nombre del producto
        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.nombre + ': ';
        nombreCelda.style.width = '30%';
        fila.appendChild(nombreCelda);

        // Celda para el precio
        const precioCelda = document.createElement('td');
        precioCelda.textContent = '$' + item.precio;
        precioCelda.style.textAlign = 'center';
        precioCelda.style.width = '20%';
        fila.appendChild(precioCelda);

        // Celda para la cantidad
        const cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = item.cantidad;
        cantidadCelda.style.textAlign = 'center';
        cantidadCelda.style.width = '10%';
        fila.appendChild(cantidadCelda);

        // Celda para el subtotal
        const subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = '$' + item.subTotal;
        subtotalCelda.style.textAlign = 'center';
        subtotalCelda.style.width = '20%';
        fila.appendChild(subtotalCelda);

        // Celda para los botones
        const buttonCelda = document.createElement('td');
        buttonCelda.style.textAlign = 'center';
        buttonCelda.style.width = '20%';

        // Botón sacar cantidad
        const sacarButton = document.createElement('button');
        sacarButton.textContent = '-';
        sacarButton.onclick = () => addToCart(item.id, -1);
        sacarButton.style.margin = '0.5rem';
        sacarButton.style.background = colorAmarillo;
        sacarButton.style.color = '#150320';
        buttonCelda.appendChild(sacarButton);

        // Botón sumar cantidad
        const sumarButton = document.createElement('button');
        sumarButton.textContent = '+';
        sumarButton.onclick = () => addToCart(item.id, 1);
        sumarButton.style.margin = '0.5rem';
        sumarButton.style.background = colorAmarillo;
        sumarButton.style.color = '#150320';
        buttonCelda.appendChild(sumarButton);

        // Botón eliminar producto
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.onclick = () => sacarDelCarrito(item.id);
        eliminarButton.style.margin = '0.5rem';
        eliminarButton.style.background = 'red';
        eliminarButton.style.color = 'white';
        buttonCelda.appendChild(eliminarButton);
        fila.appendChild(buttonCelda);

        // Agregar la fila a la tabla
        cartItemDiv.appendChild(fila);

        // Agregar la tabla al contenedor del carrito (cartDiv)
        cartDiv.appendChild(cartItemDiv);
    });

    // Div cuadro total
    const totalDiv = document.createElement('div');
    const vaciarCarro = document.createElement('button');
    const finalizarCompra = document.createElement('button');
    finalizarCompra.textContent = 'Finalizar Compra';
    const verHistorial = document.createElement('button');
    verHistorial.textContent = 'Ver Compras';

    totalDiv.innerHTML = `<p>Total: $${calculateTotal()}</p>`;
    cartDiv.appendChild(totalDiv);
    totalDiv.appendChild(finalizarCompra);
    finalizarCompra.addEventListener('click', compraFinalizada);
    totalDiv.appendChild(verHistorial);
    verHistorial.addEventListener('click', mostrarHistorialCompras);

    totalDiv.className = 'totalDiv';
    totalDiv.style.alignSelf = 'flex-end';
    totalDiv.style.color = 'colorAmarillo';
    totalDiv.style.backgroundColor = '#150320';
    totalDiv.style.fontSize = '2rem';
    totalDiv.style.marginTop = '1rem';
    totalDiv.style.padding = '1.3rem';
    totalDiv.style.fontFamily = 'buda';
    totalDiv.style.textAlign = 'center';
    totalDiv.appendChild(vaciarCarro);
    vaciarCarro.textContent = 'Vaciar';
    vaciarCarro.style.margin = '1.5rem';
    vaciarCarro.addEventListener('click', vaciarCarritoFormula);
}

function sacarDelCarrito(productId) {
    cart = cart.filter(item => item.id !== productId);
    guardarCarritoEnLocalStorage();
    renderCart();
}

function compraFinalizada() {
    // Historial de compras desde el localStorage
    const historialCompras = JSON.parse(localStorage.getItem('historialCompras')) || [];

    // Sumar nuevo carrito al historial
    if (cart.length > 0) {
        historialCompras.push({ date: new Date().toLocaleDateString(), items: cart });
        localStorage.setItem('historialCompras', JSON.stringify(historialCompras));
    }

    // Vaciar el carrito una vez finalizada la compra.
    cart = [];
    guardarCarritoEnLocalStorage();
    renderCart();

    // Sweet Alert compra finalizada
    Swal.fire({
        title: "Compra finalizada",
        icon: "info",
        imageHeight: 150,
        icon: "success",
    });
}

function vaciarCarritoFormula() {
    cart = [];
    guardarCarritoEnLocalStorage();
    renderCart();
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function recuperrarCarrito() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

// Mostrar el historial de compras
function mostrarHistorialCompras() {
    const divHistorial = document.getElementById('historial-compras');

    const historialCompras = JSON.parse(localStorage.getItem('historialCompras')) || [];

    // Alternar la visibilidad del div
    if (divHistorial.style.display === 'none' || divHistorial.style.display === '') {
        divHistorial.innerHTML = '';

        if (historialCompras.length === 0) {
            divHistorial.innerHTML = '<h3>Todavía no realizaste tu primera compra</h3>';
        } else {
            historialCompras.forEach(compra => {
                const comprasDiv = document.createElement('div');
                comprasDiv.style.backgroundColor = '#150320';
                comprasDiv.style.fontFamily = 'buda';
                comprasDiv.style.padding = '1rem';
                comprasDiv.style.marginBottom = '1rem';
                const dateP = document.createElement('p');
                dateP.textContent = `Fecha: ${compra.date}`;
                dateP.className = 'fechaComp';

                comprasDiv.appendChild(dateP);

                compra.items.forEach(item => {
                    const itemP = document.createElement('p');
                    itemP.textContent = `${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.subTotal}`;
                    itemP.style.color = '#b88d00';
                    comprasDiv.appendChild(itemP);
                });

                divHistorial.appendChild(comprasDiv);  
            });
        }

        divHistorial.style.display = 'block';

        divHistorial.scrollIntoView({ behavior: 'smooth' });
        
    } else {
        divHistorial.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});
