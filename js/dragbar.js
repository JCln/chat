const screen = document.getElementById('drag-container');
const left = document.getElementById('drag-left');
const right = document.getElementById('drag-right');
const bar = document.getElementById('dragbar');

const drag = (e) => {
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    right.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
};
bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

screen.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
});