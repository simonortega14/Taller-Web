// chat.js

function sendMessage() {
    // Obtiene los valores de los campos
    const sender = document.getElementById('sender').value.trim();
    const message = document.getElementById('message').value.trim();

    // Obtiene los elementos de error
    const senderError = document.getElementById('senderError');
    const messageError = document.getElementById('messageError');

    // Limpia los mensajes de error
    senderError.textContent = '';
    messageError.textContent = '';

    // Valida los campos
    if (!sender) {
        senderError.textContent = 'El nombre es obligatorio.';
        return;
    }
    if (!message) {
        messageError.textContent = 'El mensaje no puede estar vacío.';
        return;
    }

    // Crea el formato del mensaje
    const formattedMessage = `${sender} : ${message}`;

    // Crea un nuevo elemento de mensaje
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<span class="sender">${sender}</span> : <span class="text">${message}</span>`;

    // Añade el mensaje al contenedor de mensajes
    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);

    // Limpia los campos de entrada
    document.getElementById('sender').value = '';
    document.getElementById('message').value = '';
}

