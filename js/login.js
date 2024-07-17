document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your login logic here
    if (username && password) {
        alert('Login successful!');
        // Redirect or perform further actions
    } else {
        alert('Please fill in all fields.');
    }
});
