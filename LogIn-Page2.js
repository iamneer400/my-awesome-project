 document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorMessageElement = document.getElementById('errorMessage');

      // Case 1: Empty Username or Password
      if (username === '' || password === '') {
        errorMessageElement.textContent = 'Please enter both username and password.';
        return;  // Stop further processing
      }

      // Case 2: Minimum Password Length
      if (password.length < 6) {
        errorMessageElement.textContent = 'Password must be at least 6 characters long.';
        return;
      }

      // Case 3: Simple Validation - Example (Replace with your actual authentication logic)
      //  This is just a placeholder for demonstration.  In a real application,
      //  you would send the username/password to a server for authentication.
      if (username === 'iamneerajtiwari400@gmail.com' && password === 'Neeraj@123') {
        // Case 4: Successful Loginpassword123
        errorMessageElement.textContent = ''; // Clear any previous error
        alert('Login successful!'); // Or redirect to another page
        window.location.href = "https://studio.youtube.com/channel/UC25TTdh0I8dDry2X3IScVOA"; // Redirect to a success page
      } else {
        // Case 5: Invalid Credentials
        errorMessageElement.textContent = 'Invalid username or password.';
      }
    });