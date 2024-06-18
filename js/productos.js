
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

// Arry de productos.
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
        cartItem.subTotal = cartItem.cantidad * product.precio; 
    } else {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: cantidad,
            subTotal: cantidad * product.precio,
        })
    }
    saveCartToLocalStorage();
    renderCart();
};
// Calcular total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.subTotal, 0);
}
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productList.style.display = 'flex';
    productList.style.textAlign = 'center';
    productList.style.justifyContent = 'center'
    productList.style.alignItems = 'center'
    productList.style.verticalAlign = 'middle';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.id = 'productDivId';
        productDiv.innerHTML = `
        <img src="../img/f${product.id}.webp" alt="foto${product.id}">
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
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
        <p>${item.nombre}: ${item.precio} x ${item.cantidad} = $${item.subTotal}</p>
        `;
        cartItemDiv.style.backgroundColor = '#150320';
        cartItemDiv.style.padding = '1rem';
        cartDiv.appendChild(cartItemDiv);
    });
    const totalDiv = document.createElement('div');
    const vaciarCarro = document.createElement('button');
    const finalizarCompra = document.createElement('button');
    finalizarCompra.textContent = 'Finalizar Compra';
 
    totalDiv.innerHTML = `<p>Total: $${calculateTotal()}</p>`;
    cartDiv.appendChild(totalDiv);
    totalDiv.appendChild(finalizarCompra);
    finalizarCompra.addEventListener('click', compraFinalizada);

    totalDiv.className ='totalDiv';
    
    totalDiv.style.alignSelf = 'flex-end'
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
function compraFinalizada(){
    cart=[];
    alert("Tu compra se realizo con exito. ¡Gracias!");
    saveCartToLocalStorage();
    renderCart();
}

function vaciarCarritoF(){
    cart=[];
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



