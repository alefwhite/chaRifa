const result = document.querySelector(".result > p");
const draw = document.querySelector("#draw")
const award = document.querySelector("#award")

//result.innerHTML = 10

function addValue (value) {
    result.innerHTML = value
}


award.addEventListener('click', function () {
    addValue(0)
})

draw.addEventListener('click', function () {
    const value = Math.ceil(Math.random() * 100)
    addValue(value)
})

