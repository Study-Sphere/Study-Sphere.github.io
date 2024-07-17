document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with actual admin authentication logic
    if (username === 'admin' && password === 'adminpassword') {
        alert('Admin login successful!');
        // Redirect or perform further actions
    } else {
        alert('Invalid admin credentials.');
    }
});
