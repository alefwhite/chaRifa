const result = document.querySelector(".result > p");

const draw = document.querySelector("#draw");
const award = document.querySelector("#award");
const clean = document.querySelector("#clean");

let timer;

let stop = false


function addValue (value) {
    result.innerHTML = value
}

function generateValue () {

    if (!stop) {
        timer = setInterval(() => {
            const value = Math.round(Math.random() * 100)
            addValue(value)
        }, 30)    
        
        stop = true 
    }
}


award.addEventListener('click', function () {
    stop = false

   clearInterval(timer)
})

draw.addEventListener('click', function () {
    generateValue()
})

clean.addEventListener('click', function () {
    stop = false
    clearInterval(timer)
    result.innerHTML = 0
})

