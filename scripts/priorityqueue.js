const output = document.querySelector("#yourStack")
const inputOne = document.querySelector("#inputOne")
const inputTwo = document.querySelector("#inputTwo")
const form = document.querySelector("#submit").addEventListener("submit", submitOne)
const stackLength = document.querySelector("#stackLength")
const remove = document.querySelector("#remove").addEventListener("click", axe)



let collection = [];
class queue {
    constructor() {

        this.enqueue = function (payload) {
            return collection.push(payload)
        }

        this.dequeue = function () {
            return collection.shift()
        }

        this.front = function () {
            return collection[0]
        }

        this.size = function () {
            return collection.length
        }

        this.empty = function () {
            return collection.length === 0
        }

    }
}

class Pqueue {
    constructor() {
        this.isEmpty = function () {
            if (collection.length === 0) {
                return true
            }
        }

        this.enqueue = function (payload) {
            if (this.isEmpty()) {
                collection.push(payload)
            } else {
                var added = false;
                for (let i = 0; i < collection.length; i++) {
                    if (payload[1] < collection[i][1]) {
                        collection.splice(i, 0, payload)
                        added = true
                        break;
                    }

                }
                if (!added) {
                    collection.push(payload)
                }
            }
        }

        this.dequeue = function () {
            var value = collection.shift()
            return value[0]
        }

        this.front = function () {
            return collection[0]
        }

        this.size = function () {
            return collection.length
        }

        this.empty = function () {
            return collection.length === 0
        }

    }
}

function submitOne(e) {
    e.preventDefault()
    const priority = new Pqueue()
    priority.enqueue([inputOne.value, parseInt(inputTwo.value)]);
    output.textContent = collection
    stackLength.textContent = collection.length
    inputOne.value = ""
    inputTwo.value = ""
    console.log(collection);

}

function axe() {
    const priority = new Pqueue()
    if (priority.isEmpty()) {
        return alert("cant remove from an empty queue mate")
    }
    priority.dequeue()
    output.textContent = collection
    stackLength.textContent = collection.length
}


// const line = new queue()
// const priority = new Pqueue()
// priority.enqueue(["first", 1]);
// priority.enqueue(["fifth", 5]);
// priority.enqueue(["second", 2]);
// priority.enqueue(["fourth", 4]);
// priority.enqueue(["fourth", 3]);
// console.log(collection);
// priority.dequeue()
// console.log(collection);

// console.log(line.enqueue("a"));
// console.log(line.size());
// console.log(line.enqueue("c"));
// console.log(line.enqueue("e"));
// console.log(collection);
// console.log(line.dequeue());
// console.log(collection);








// let goods = []



// function print() {
//     const payload = {
//         name: input.value,
//         age: 10,
//         right: false
//     }
//     goods.push(payload)
//     goods.map(good => {
//         let li = document.createElement("li")
//         li.appendChild(document.createTextNode(good.name))
//         output.appendChild(li)
//     })
//     goods.length = 0
// }