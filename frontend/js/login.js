const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate inputs
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Log in user
    // You can use AJAX or fetch API to send a request to your server
    // to authenticate the user
    // For demonstration purposes, we'll just alert a success message
    alert('Logged in successfully!');
});