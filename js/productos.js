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

// Array de productos.
const products = [
    { id: 1, nombre: "UK-JAPAN-EEUU-EU Black", precio: 19000, },
    { id: 2, nombre: "Dark Side of the Moon", precio: 25000, },
    { id: 3, nombre: "Dark Side of the Moon 1973", precio: 20000, },
    { id: 4, nombre: "The Wall", precio: 23000, },
    { id: 5, nombre: "UK-JAPAN-EEUU-EU Black", precio: 19000, },
    { id: 6, nombre: "Buzo The Wall", precio: 15000, },
];

// Local Storage con carrito
let cart = loadCartFromLocalStorage();

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
    saveCartToLocalStorage();
    renderCart();

    // Sweet Alert
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
//     /////////////////////////////////////////////////////// original
//     // cart.forEach(item => {
//     //     const cartItemDiv = document.createElement('div');
//     //     cartItemDiv.innerHTML = `
//     //     <p>${item.nombre}: $${item.precio} x <button onclick="addToCart(${item.id}, -1)">-</button> ${item.cantidad} <button onclick="addToCart(${item.id}, 1)">+</button> = $${item.subTotal} <button onclick="removeFromCart(${item.id})">Eliminar</button></p>
//     //     `;
//     //     cartItemDiv.innerHTML = `
//     //     <p>${item.nombre}: $${item.precio} x  ${item.cantidad} = $${item.subTotal}
//     //     <button onclick="addToCart(${item.id}, -1)">-</button>
//     //     <button onclick="addToCart(${item.id}, 1)">+</button>
//     //     <button onclick="removeFromCart(${item.id})">Eliminar</button></p>
//     // `;
//     // cartItemDiv.style.backgroundColor = '#150320';
//     //     cartItemDiv.style.padding = '1rem';
//     //     cartDiv.appendChild(cartItemDiv);
//     // });

//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla
    cart.forEach(item => {
        const cartItemDiv = document.createElement('table');
        cartItemDiv.id = 'idTabla';
        cartItemDiv.style.backgroundColor = '#150320';
        cartItemDiv.style.padding = '1rem';
        cartItemDiv.style.width = '100%'; // Ancho de la tabla al 100%

        // Crear una fila (tr) para cada elemento del carrito
        const row = document.createElement('tr');

        // Celda para el nombre del artículo (alineado a la izquierda)
        const nameCell = document.createElement('td');
        nameCell.textContent = item.nombre + ': ';
        nameCell.style.width = '30%'; // Ancho fijo para el nombre del artículo
        row.appendChild(nameCell);

        // Celda para el precio (centrado)
        const priceCell = document.createElement('td');
        priceCell.textContent = '$' + item.precio;
        priceCell.style.textAlign = 'center'; // Estilo centrado
        priceCell.style.width = '20%'; // Ancho fijo para el precio
        row.appendChild(priceCell);

        // Celda para la cantidad (centrado)
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.cantidad;
        quantityCell.style.textAlign = 'center'; // Estilo centrado
        quantityCell.style.width = '10%'; // Ancho fijo para la cantidad
        row.appendChild(quantityCell);

        // Celda para el subtotal (centrado)
        const subtotalCell = document.createElement('td');
        subtotalCell.textContent = '$' + item.subTotal;
        subtotalCell.style.textAlign = 'center'; // Estilo centrado
        subtotalCell.style.width = '20%'; // Ancho fijo para el subtotal
        row.appendChild(subtotalCell);

        // Celda para los botones (centrado)
        const buttonCell = document.createElement('td');
        buttonCell.style.textAlign = 'center'; // Estilo centrado
        buttonCell.style.width = '20%'; // Ancho fijo para los botones

        // Botón para disminuir cantidad
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => addToCart(item.id, -1);
        decreaseButton.style.margin = '0.5rem';
        decreaseButton.style.background = colorAmarillo;
        decreaseButton.style.color = '#150320';
        buttonCell.appendChild(decreaseButton);

        // Botón para aumentar cantidad
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => addToCart(item.id, 1);
        increaseButton.style.margin = '0.5rem';
        increaseButton.style.background = colorAmarillo;
        increaseButton.style.color = '#150320';
        buttonCell.appendChild(increaseButton);

        // Botón para eliminar artículo
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item.id);
        removeButton.style.margin = '0.5rem';
        removeButton.style.background = 'red';
        removeButton.style.color = 'white';
        buttonCell.appendChild(removeButton);

        row.appendChild(buttonCell);

        // Agregar la fila a la tabla
        cartItemDiv.appendChild(row);

        // Agregar la tabla al contenedor del carrito (cartDiv)
        cartDiv.appendChild(cartItemDiv);
    });


//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla
//     //////////////////////////////////////////////////////////// prueba de tabla



    const totalDiv = document.createElement('div');
    const vaciarCarro = document.createElement('button');
    const finalizarCompra = document.createElement('button');
    finalizarCompra.textContent = 'Finalizar Compra';

    totalDiv.innerHTML = `<p>Total: $${calculateTotal()}</p>`;
    cartDiv.appendChild(totalDiv);
    totalDiv.appendChild(finalizarCompra);
    finalizarCompra.addEventListener('click', compraFinalizada);

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
    vaciarCarro.addEventListener('click', vaciarCarritoF);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    renderCart();
}

function compraFinalizada() {
    cart = [];
    saveCartToLocalStorage();
    renderCart();

    // Sweet Alert
    Swal.fire({
        title: "Compra finalizada",
        icon: "info",
        imageHeight: 150,
        icon: "success",
    });
}

function vaciarCarritoF() {
    cart = [];
    saveCartToLocalStorage();
    renderCart();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});
