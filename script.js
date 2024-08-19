const validUsername = 'admin';
const validPassword = 'admin123';

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});
