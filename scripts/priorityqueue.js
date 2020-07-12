const output = document.querySelector(".output")
const input = document.querySelector(".input")
const form = document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault()

    if (!input.value) {
        return alert("can't be empty")
    }
    print()
    input.value = ""
})

let goods = []



function print() {
    const payload = {
        name: input.value,
        age: 10,
        right: false
    }
    goods.push(payload)
    goods.map(good => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(good.name))
        output.appendChild(li)
    })
    goods.length = 0
}