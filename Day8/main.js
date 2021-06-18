let squares = document.getElementsByClassName('class-box');

Array.prototype.forEach.call(squares, (sq) => {
    sq.addEventListener('click', (event) => {
        sq.classList.toggle('active');
    })
});