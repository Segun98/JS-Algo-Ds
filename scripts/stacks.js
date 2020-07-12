const submitStack = document.querySelector("#submitStack")
const input = document.querySelector("#input")
let yourStack = document.querySelector("#yourStack")
const stackLength = document.querySelector("#stackLength")
const remove = document.querySelector("#remove")
const errormsg = document.querySelector("#error")


class stacks {
    constructor() {
        this.count = 0
        this.collection = {}

        this.add = function (item) {
            if (!item)
                throw new Error("you have to add an item")
            this.collection[this.count] = item
            this.count++
            return this.collection
        }

        this.length = function () {
            return this.count
        }

        this.remove = function () {
            if (this.count === 0)
                throw new Error("there's no item in the stack mate")
            delete this.collection[this.count - 1]
            this.count--
            return this.collection
        }
        this.peek = function () {
            return this.collection
        }


    }
}

const stack = new stacks()

submitStack.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        stack.add(input.value)
        let values = ""
        if (stack.length() > 0) {
            for (const val in stack.peek()) {
                values += yourStack.textContent = stack.peek()[val] + ", ";
                yourStack.textContent = values

            }
        }
        stackLength.textContent = stack.length()
        input.value = ""
    } catch (error) {
        errormsg.textContent = error.message

        if (error) {
            setTimeout(() => {
                errormsg.textContent = ""
            }, 3000);
        }

    }

})

remove.addEventListener("click", () => {
    try {
        stack.remove()
        let values = ""
        for (const val in stack.peek()) {
            values += yourStack.textContent = stack.peek()[val] + ", ";
            yourStack.textContent = values
        }
        stackLength.textContent = stack.length()

        if (stack.length() === 0) {
            yourStack.textContent = ""
        };

    } catch (error) {
        errormsg.textContent = error.message
        if (error) {
            setTimeout(() => {
                errormsg.textContent = ""
            }, 3000);
        }
    }
})
// console.log(stack.peek());
// console.log(stack.length());
// console.log(stack.add("book"));
// console.log(stack.add("eraser"));
// console.log(stack.peek());