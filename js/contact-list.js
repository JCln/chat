let contactList = [
    { profileImage: '../assets/imgs/marker_red.png', briefText: 'test', title: 'test', className: 'leftish', date: '1401/12/03', badgeCount: 1 },
    { profileImage: '../assets/imgs/1.png', briefText: 'Lorem ipsum dolor sit amet.', title: 'test2', className: 'rightish', date: '1401/12/04', badgeCount: 21 },
    { profileImage: '../assets/imgs/marker-icon.png', briefText: 'Lorem ipsum dolor', title: 'مزدک', className: 'rightish', date: '1401/12/05', badgeCount: 0 },
    { profileImage: '../assets/imgs/marker_red.png', briefText: 'Lorem ipsum dolor sit amet.', title: 'غزل', className: 'leftish', date: '1401/12/06', badgeCount: 5 },
    { profileImage: '../assets/imgs/marker-icon.png', briefText: 'Lorem ipsum dolor', title: 'نیلوفر', className: 'rightish', date: '1401/12/07', badgeCount: 8 },
];


function getContastList() {
    let contactListElement = document.getElementById('main');
    let data = "";
    for (let index = 0; index < contactList.length; index++) {
        // showImageMessage();
        data += `<div class="${contactList[index].className}" 
            ${document.styleSheets[0].addRule(`${'.message-body .' + contactList[index].className}::before`, 'content: url("' + contactList[index].imgUrl + '");')}       
            >`

        data += `<img src="${contactList[index].imageFile}" alt="test">`
        data += '</div>'
    }
    contactListElement.innerHTML += data;
}
setTimeout(() => {
    getContastList();
}, 100);