"use strict";

let message = [
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish', imgUrl: 'assets/imgs/marker_red.png' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: true, className: 'rightish', imgUrl: 'assets/imgs/marker-icon.png' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish', imgUrl: 'assets/imgs/marker-icon.png' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish', imgUrl: 'assets/imgs/marker_red.png' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish', imgUrl: 'assets/imgs/marker-icon.png' },
];

function isNull(e) {
    if (e.trim() == '' || !e || e == undefined)
        return false;
    return true;
}
function emptyUserInput() {
    const userInput = document.getElementById('user-input');
    userInput.value = '';
}
function getLatestData() {
    let messageElement = document.getElementById('messages');
    for (let index = 0; index < message.length; index++) {
        let data = "";
        messageElement.innerHTML = '';
        for (let index = 0; index < message.length; index++) {
            data += `<div class="${message[index].className}">`;
            data += `${message[index].text}`;
            data += '</div>';
        }
        messageElement.innerHTML += data;
        emptyUserInput();
    }
}
function addMySingleMessage(a) {
    message.push({ text: a, isMyMessage: true, className: 'rightish', imgUrl: 'assets/imgs/marker-icon.png' });
    getLatestData();
}
function addYourSingleMessage(a) {
    message.push({ text: a, isMyMessage: true, className: 'leftish', imgUrl: 'assets/imgs/marker_red.png' });
    getLatestData();
}
// button click send message
function messageEnter() {
    const userInput = document.getElementById('user-input');
    if (userInput != null && Utils.isNull(userInput.value)) {
        console.log(userInput.value);
        addMySingleMessage(userInput.value);
    }
}
// latest messages AJAX CALL
setTimeout(() => {
    getLatestData();
}, 100);

// event listeners
addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById('user-input');
        if (userInput != null) {
            event.preventDefault();
            messageEnter();
        }
    }
});
