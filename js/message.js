let message = [
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: true, className: 'rightish' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish' },
    { text: 'Lorem ipsum dolor sit amet.', isMyMessage: false, className: 'leftish' },
    { text: 'Lorem ipsum dolor', isMyMessage: true, className: 'rightish' },
];

function getData() {
    const dataElement = document.querySelector('.message-body');
    for (let index = 0; index < message.length; index++) {

        dataElement.insertAdjacentHTML('afterbegin', `
        <div class="${message[index].className}">
            ${message[index].text}
        </div>        
  `)
    }
}
// button click send message
function messageEnter() {
    const a = document.querySelector('.user-input').value;
    if (a) {
        getData();
        console.log(a);
    }
}