// JavaScript for Login Page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validate form inputs
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const address = document.getElementById("address").value.trim();

        if (!name || !phone || !email || !password || !address) {
            alert("Please fill out all fields.");
            return;
        }

        // Redirect to home page on successful login
        alert("Login successful!");
        window.location.href = "home.html";
    });
});
