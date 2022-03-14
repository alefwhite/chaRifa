const result = document.querySelector(".result > p");

const draw = document.querySelector("#draw");
const award = document.querySelector("#award");
const clean = document.querySelector("#clean");

let timer;


function addValue (value) {
    result.innerHTML = value
}

function generateValue () {
    timer = setInterval(() => {
        const value = Math.ceil(Math.random() * 100)
        addValue(value)
    }, 10)
}


award.addEventListener('click', function () {
   clearInterval(timer)
})

draw.addEventListener('click', function () {
    generateValue()
})

clean.addEventListener('click', function () {
    result.innerHTML = 0
})

