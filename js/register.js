import { Auth } from 'aws-amplify';

document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && username && email && password) {
        try {
            await signUp(username, password, email);
            alert('Registration successful!');
            // Redirect or perform further actions
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

const signUp = async (username, password, email) => {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('Error signing up:', error);
        throw error;  // Re-throw error to handle it in the submit handler
    }
};
