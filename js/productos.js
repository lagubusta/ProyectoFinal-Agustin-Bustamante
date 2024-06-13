
const divListaProductos = document.createElement('div');
divListaProductos.id = ('product-list');
cuerpo.appendChild(divListaProductos);
divListaProductos.style.border = 'solid 2px green';
divListaProductos.style.padding = '1rem'
divListaProductos.style.display = 'flex';
divListaProductos.style.flexWrap = 'wrap';

const divCarrito = document.createElement('div');
divCarrito.id = ('cart');
cuerpo.appendChild(divCarrito);
divCarrito.style.fontFamily = 'buda';
divCarrito.style.color = colorAmarillo;
divCarrito.style.fontSize = '18px';
divCarrito.style.padding = '6rem';

const products = [  //2.
    { id: 1, nombre: "Azucar", precio: 1080, },
    { id: 2, nombre: "Yerba", precio: 1700, },
    { id: 3, nombre: "Dulce de Leche", precio: 500, },
    { id: 4, nombre: "Miel", precio: 2300, },
    { id: 5, nombre: "Manetca", precio: 150, },
    { id: 6, nombre: "Café", precio: 6000, },
];
let cart = loadCartFromLocalStorage();  //3.

function addToCart(productId, cantidad) { //4.
    const product = products.find(p => p.id === productId);  //4.1.
    if (!product) { //4.2.
        console.error("El producto no fue encontrado");
        return;
    }
    const cartItem = cart.find(item => item.id === productId); //4.3.
    if (cartItem) { //4.4.
        cartItem.cantidad += cantidad;
        cartItem.subTotal = cartItem.cantidad * product.precio; //4.5.
    } else { //4.6.
        cart.push({ //4.6.1
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: cantidad,
            subTotal: cantidad * product.precio,
        })
    }
    saveCartToLocalStorage(); //4.7.
    renderCart(); //4.8.
};
function calculateTotal() { //5.
    return cart.reduce((total, item) => total + item.subTotal, 0);
}
function renderProducts() { //6.
    const productList = document.getElementById('product-list'); //6.1
    productList.innerHTML = ''; //6.2
    productList.style.display = 'flex';
    productList.style.textAlign = 'center';
    productList.style.justifyContent = 'center'
    productList.style.alignItems = 'center'
    productList.style.verticalAlign = 'middle';

    products.forEach(product => { //6.3
        const productDiv = document.createElement('div'); //6.4
        productDiv.innerHTML = `
        <p>${product.nombre} - $${product.precio}</p>
        <button onclick="addToCart(${product.id}, 1)">Agregar al carrito</button>
        `;
        productList.appendChild(productDiv); //6.5
        productDiv.style.backgroundColor = 'white';
        productDiv.style.padding = '1rem';
        productDiv.style.textAlign = 'center';
        productDiv.style.minHeight = '12rem';
        productDiv.style.maxHeight = '16rem';
        // productDiv.style.flexBasis = 'calc(25% - 1rem)';
        productDiv.style.flexBasis = 'calc(33.33% - 2rem)';
        productDiv.style.margin = '1rem';
        productDiv.style.boxSizing = 'border-box';
    });
}

function renderCart() { //7.
    const cartDiv = document.getElementById('cart'); //7.1
    cartDiv.style.backgroundColor = 'pink';
    cartDiv.style.padding = '1rem';
    cartDiv.innerHTML = ''; //7.2
    cart.forEach(item => { //7.3
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
        <p>${item.nombre}: ${item.precio} x ${item.cantidad} = $${item.subTotal}</p>
        `;
        cartItemDiv.style.backgroundColor = 'blue';
        cartItemDiv.style.padding = '1rem';
        cartDiv.appendChild(cartItemDiv); //7.4
    });
    const totalDiv = document.createElement('div'); //8.
    totalDiv.innerHTML = `<p>Total: $${calculateTotal()}</p>`; //8.1
    cartDiv.appendChild(totalDiv); //8.2
    totalDiv.style.alignItems = 'right';
}
function saveCartToLocalStorage() {   //9.
    localStorage.setItem('cart', JSON.stringify(cart)); //9.1
}
function loadCartFromLocalStorage() {   // 9.2
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}
document.addEventListener('DOMContentLoaded', () => {    //10.
    renderProducts();
    renderCart();
});