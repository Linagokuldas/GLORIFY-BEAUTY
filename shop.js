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

    // Add event listener for review submission
    document.getElementById("submit-overall-review").addEventListener("click", submitReview);
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

// Handle Overall Review Submission
function submitReview() {
    const reviewText = document.getElementById("overall-review").value;
    const reviewRating = document.getElementById("overall-rating").value;

    if (reviewText.trim() === "") {
        alert("Review text cannot be empty.");
        return;
    }

    // Create a new review element
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review-card");
    reviewElement.innerHTML = `<p>${reviewText}</p><div class="stars">${'★'.repeat(reviewRating)}${'☆'.repeat(5 - reviewRating)}</div>`;

    // Append the review to the overall reviews section
    const reviewsContainer = document.getElementById("overall-reviews");
    reviewsContainer.appendChild(reviewElement);

    // Clear the review input and rating
    document.getElementById("overall-review").value = "";
    document.getElementById("overall-rating").value = "1";
}
