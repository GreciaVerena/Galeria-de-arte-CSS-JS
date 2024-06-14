document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            alert('Éxito: El formulario ha sido enviado correctamente.');
        } else {
            alert('Error: Por favor, complete todos los campos obligatorios.');
        }
    });
});

function validateForm() {
    return validateName() && validateEmail() && validateRequestType() && validateMessage();
}

function validateName() {
    const name = document.getElementById('name').value.trim();
    return name !== '';
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateRequestType() {
    const requestType = document.getElementById('requestType').value;
    return requestType !== '';
}

function validateMessage() {
    const message = document.getElementById('message').value.trim();
    return message !== '';
}