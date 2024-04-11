document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform simple validation (you can implement more complex validation if needed)
    if (username === 'admin' && password === 'password') {
        // Successful login
        alert('Login successful!');
        // Here you might redirect the user to another page
    } else {
        // Failed login
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
