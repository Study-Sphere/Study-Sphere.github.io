document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && username && email && password) {
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
