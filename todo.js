const form = document.querySelector("#form")
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const error = document.querySelector("#error")
const del = document.getElementsByTagName("span")

form.addEventListener("submit", submit)

class todo {
    constructor(name) {
        this.name = name
        this.id = Math.random()
        this.completed = false
    }
}

function submit(e) {
    e.preventDefault()
    try {
        if (!input.value) {
            throw new Error("can't be empty")
        }

        const newTodo = new todo(input.value)

        const li = document.createElement("li")
        const span = document.createElement("span")

        li.appendChild(document.createTextNode(newTodo.name))
        li.style.marginTop = "15px"
        span.appendChild(document.createTextNode("delete"))
        span.className = "del"
        li.appendChild(span)

        output.appendChild(li)

        input.value = ""


    } catch (err) {
        if (err.message) {
            error.textContent = err.message
            setTimeout(() => {
                error.textContent = ""
            }, 5000);
        }
    }

    for (let i = 0; i < del.length; i++) {
        const each = del[i]
        each.addEventListener("click", (e) => {
            const item = e.target
            item.parentNode.remove()

        })

    }
}


//class practice

class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getAge() {
        return this.age;
    }
}
const student1 = new Student('king', 20)

console.log(student1);
console.log(student1.getAge());


class Csestudent extends Student {
    constructor(name, age, course) {
        super(name, age);
        this.course = course
    }
    getCourse() {
        return this.course
    }
}
const student = new Csestudent('king', 20, 'JavaScript')
console.log(student);
console.log(student.getCourse());