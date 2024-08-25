function validateForm() {
    // Clear previous error messages
    clearErrors();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const domain = document.getElementById("domain").value;
    const college = document.getElementById("college").value.trim();
    const degree = document.getElementById("degree").value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
        showError("nameError", "Full name is required.");
        isValid = false;
    } else if (name.length < 3) {
        showError("nameError", "Full name must be at least 3 characters long.");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        showError("emailError", "Email address is required.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        showError("phoneError", "Phone number is required.");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        showError("phoneError", "Please enter a valid 10-digit phone number.");
        isValid = false;
    }

    // Domain validation
    if (domain === "") {
        showError("domainError", "Please select a webinar domain.");
        isValid = false;
    }

    // College validation
    if (college === "") {
        showError("collegeError", "College name is required.");
        isValid = false;
    }

    // Degree validation
    if (degree === "") {
        showError("degreeError", "Degree is required.");
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.textContent = "";
        element.style.display = "none";
    });
}
