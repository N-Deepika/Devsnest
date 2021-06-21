var count = 0;
var count2 = 72;

const book = document.querySelectorAll('.seats');

book.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        if (el.classList.contains('active')) {
            count++;
        } else {
            count--;
        }
        console.log(count);
        bookedseats.innerHTML = count;
        remainingseats.innerHTML = count2 - count;
    })
});
bookedseats.innerHTML = count;
remainingseats.innerHTML = count2 - count;