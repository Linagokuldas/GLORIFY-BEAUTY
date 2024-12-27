document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    document.getElementById('buy-now').addEventListener('click', placeOrder);
});

// Display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.querySelector('#cart-table tbody');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartTable.innerHTML = ''; // Clear existing rows

    cart.forEach(item => {
        const productTotal = item.price * item.quantity;
        totalPrice += productTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td>₹${productTotal}</td>
        `;
        cartTable.appendChild(row);
    });

    totalPriceElement.textContent = `Total Price: ₹${totalPrice}`; // Corrected concatenation
}

// Place order
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Your order has been placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'home.html'; // Redirect to home page
}

// Navigate between pages
function navigate(page) {
    window.location.href = page;
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            addToCart(productId, productName, productPrice);
        });
    });
});

// Add product to cart (store data in localStorage)
function addToCart(productId, productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    window.location.href = 'cart.html'; // Redirect to cart page
}
