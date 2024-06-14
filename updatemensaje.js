document.addEventListener('DOMContentLoaded', function () {
    const messageField = document.getElementById('message');

    messageField.addEventListener('input', function () {
        updateRequestTypeBasedOnMessage();
    });
});

function updateRequestTypeBasedOnMessage() {
    const message = document.getElementById('message').value.toLowerCase();
    const requestTypeField = document.getElementById('requestType');

    if (message.includes('compra')) {
        requestTypeField.value = 'compra';
    } else if (message.includes('venta')) {
        requestTypeField.value = 'venta';
    }
}