// Navigate to other pages
function navigate(page) {
    window.location.href = page;
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");

            // Store cart data in localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: parseInt(productPrice), quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            // Redirect to cart page
            navigate("cart.html");
        });
    });
});
