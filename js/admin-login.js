document.getElementById('admin-login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const adminUsername = document.getElementById('admin-username').value;
    const adminPassword = document.getElementById('admin-password').value;

    if (adminUsername && adminPassword) {
        try {
            await signIn(adminUsername, adminPassword);
            alert('Admin login successful!');
            window.location.href = 'admin-dashboard.html';  // Redirect to admin dashboard after successful login
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

const signIn = async (username, password) => {
    try {
        const admin = await Auth.signIn(username, password);
        console.log(admin);
    } catch (error) {
        console.log('Error signing in:', error);
        throw error;
    }
}
