const messages = [
"¿De verdad piensas eso?",
"¿Seguro que no quieres reconsiderarlo?",
"Vamos, no seas así...",
"Solo piénsalo un poquito más, porfa...",
"Si dices que no, mi corazón se romperá 💔",
"Me harías muy feliz si dijeras que sí...",
"¿Así me pagas después de todo?",
"Bueno... está bien... suspiro...",
"Es broma, ¡anda, di que sí! 😁",
"¿Quién podría resistirse a esto?",
"No me hagas sacar la carita de perrito triste 🥺",
"¡Prometo que será la última vez que pregunto!",
"Pero... ¿y si cambiamos de opinión?",
"No sabes lo feliz que me harías...",
"¡Vamos, que no es tan difícil decir que sí!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}