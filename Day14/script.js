let cli = document.querySelector('.cli');
let hov = document.querySelector('.hov');
let mouseout = document.querySelector('.mouseout');
let hold = document.querySelector('.hold');

cli.addEventListener('click', () => {
    cli.innerHTML = "CLICKED😀";
})
hov.addEventListener('mouseover', () => {
    hov.innerHTML = "Thanks😊";
})
mouseout.addEventListener('mouseout', () => {
    mouseout.innerHTML = "WOW😁";
})
hold.addEventListener('mouseup', () => {
    hold.innerHTML = "YOU ARE GREAT😉";
})