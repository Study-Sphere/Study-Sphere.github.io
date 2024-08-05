import { Auth } from 'aws-amplify';

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        try {
            await signIn(username, password);
            alert('Login successful!');
            window.location.href = 'html\home.html';
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

const signIn = async (username, password) => {
    try {
        const user = await Auth.signIn(username, password);
        console.log(user);
    } catch (error) {
        console.log('Error signing in:', error);
        throw error;  // Re-throw error to handle it in the submit handler
    }
}