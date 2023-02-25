"use strict";

let message = [
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish', imgUrl: '../assets/imgs/marker_red.png' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: true, className: 'rightish', imgUrl: '../assets/imgs/marker-icon.png' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish', imgUrl: '../assets/imgs/marker-icon.png' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish', imgUrl: '../assets/imgs/marker_red.png' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish', imgUrl: '../assets/imgs/marker-icon.png' },
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
    let data = "";
    for (let index = 0; index < message.length; index++) {
        data += `<div class="${message[index].className}" 
        ${document.styleSheets[0].addRule(`${'.message-body .' + message[index].className}::before`, 'content: url("' + message[index].imgUrl + '");')}       
        >`
        data += `${message[index].text}`
        data += '</div>'
    }
    messageElement.innerHTML += data;
    emptyUserInput();

}
function addMySingleMessage(a) {
    message.push({ text: a, isMyMessage: true, className: 'rightish', imgUrl: '../assets/imgs/marker-icon.png' });
    let messageElement = document.getElementById('messages');
    messageElement.innerHTML = '';
    getLatestData();
}
function addYourSingleMessage(a) {
    message.push({ text: a, isMyMessage: true, className: 'leftish', imgUrl: '../assets/imgs/marker_red.png' });
    let messageElement = document.getElementById('messages');
    messageElement.innerHTML = '';
    getLatestData();
}
// button click send message
function messageEnter() {
    const userInput = document.getElementById('user-input');
    if (userInput != null && isNull(userInput.value)) {
        addMySingleMessage(userInput.value);
    }
}
// latest messages AJAX CALL if zero, error happens
setTimeout(() => {
    getLatestData();
}, 100);

// event listeners
const enterListener = addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById('user-input');
        if (userInput != null) {
            event.preventDefault();
            messageEnter();
        }
    }
});
