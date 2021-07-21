let input_data = document.querySelector("input");
let elem = document.querySelector("article");
let mem = document.querySelector("h3");
elem.innerHTML = "";
mem.innerHTML = "";
fetch(`https://bts-quotes-api.herokuapp.com/quote/random`)
    .then(res => {
        return res.json()
    })
    .then(data => {
        elem.innerHTML += data.quote;
        mem.innerHTML += "-By " + data.member;
    })