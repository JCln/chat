const left = document.getElementById('drag-left');
const right = document.getElementById('drag-right');
const bar = document.getElementById('dragbar');

const drag = (e) => {
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();    
    left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
};
console.log(left);
bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
});