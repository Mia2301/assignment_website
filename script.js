// script.js

// Form validation function
function validateForm() {
    let valid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.innerHTML = "";
    });

    // NIC validation (must have 12 characters)
    let nic = document.getElementById('nic').value;
    if (nic.length !== 12) {
        document.getElementById('nicError').innerHTML = "NIC must have 12 characters.";
        valid = false;
    }

    // First Name and Last Name validation (must contain only letters)
    let firstName = document.getElementById('firstName').value;
    let surname = document.getElementById('surname').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').innerHTML = "First name must contain only letters.";
        valid = false;
    }
    if (!/^[a-zA-Z]+$/.test(surname)) {
        document.getElementById('surnameError').innerHTML = "Last name must contain only letters.";
        valid = false;
    }

    // Phone validation (must contain exactly 7 digits)
    let phone = document.getElementById('phone').value;
    if (!/^\d{7}$/.test(phone)) {
        document.getElementById('phoneError').innerHTML = "Phone number must contain 7 digits.";
        valid = false;
    }

    // Email validation
    let email = document.getElementById('email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerHTML = "Invalid email address.";
        valid = false;
    }

    // Username validation (must be longer than 8 characters and include birth date from NIC)
    let username = document.getElementById('username').value;
    if (username.length <= 8 || !username.includes(nic.slice(4, 6))) {
        document.getElementById('usernameError').innerHTML = "Username must be more than 8 characters and include birth date from NIC.";
        valid = false;
    }

    // Password match validation
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match.";
        valid = false;
    }

    // If form is valid, redirect to another page
    if (valid) {
        alert("Form successfully validated!");
        window.location.href = "success.html"; // Redirect to a success page
    }

    return valid;
}

// Confirmation before reset
function confirmReset() {
    return confirm("Are you sure you want to reset the form?");
}

// Display a message when a checkbox is selected
document.querySelectorAll("input[type=checkbox]").forEach(function(element) {
    element.addEventListener("change", function() {
        alert("A checkbox has been selected.");
    });
});
