const addSetA = document.querySelector("#addSetA").addEventListener("submit", submitA)
const addSetB = document.querySelector("#addSetB").addEventListener("submit", submitB)
const inputSetA = document.querySelector("#inputSetA")
const inputSetB = document.querySelector("#inputSetB")
const setAvalues = document.querySelector("#setAvalues")
const setBvalues = document.querySelector("#setBvalues")
const inputerror = document.querySelector("#error")
const AinterB = document.querySelector("#AinterB")
const AminusB = document.querySelector("#AminusB")
const union = document.querySelector("#union")

class mySet {
    constructor() {
        var collection = [];

        this.has = function (element) {
            return (collection.indexOf(element) !== -1);
        };

        this.values = function () {
            return collection;
        };

        this.add = function (element) {
            if (!this.has(element)) {
                collection.push(element);
                return true;
            }
            return false;
        };

        this.remove = function (element) {
            if (this.has(element)) {
                index = collection.indexOf(element);
                collection.splice(index, 1);
                return true;
            }
            return false;
        };
        this.size = function () {
            return collection.length;
        };

        this.union = function (otherSet) {
            var unionSet = new mySet();
            var firstSet = this.values();
            var secondSet = otherSet.values();
            firstSet.forEach((e) => {
                unionSet.add(e);
            });
            secondSet.forEach((e) => {
                unionSet.add(e);
            });
            return unionSet;
        };

        this.intersection = function (otherSet) {
            var intersectionSet = new mySet();
            var firstSet = this.values();
            firstSet.forEach((e) => {
                if (otherSet.has(e)) {
                    intersectionSet.add(e);
                }
            });
            return intersectionSet;
        };

        this.difference = function (otherSet) {
            var differenceSet = new mySet();
            var firstSet = this.values();
            firstSet.forEach((e) => {
                if (!otherSet.has(e)) {
                    differenceSet.add(e);
                }
            });
            return differenceSet;
        };

        this.subset = function (otherSet) {
            var firstSet = this.values();
            return firstSet.every(value => {
                return otherSet.has(value);
            });
        };
    }
}

var setA = new mySet()
var setB = new mySet()

function submitA(e) {
    e.preventDefault()
    try {
        if (inputSetA.value === "") {
            throw new Error("can't be empty mate")
        }
        setA.add(inputSetA.value)
        setAvalues.textContent = setA.values()
        inputSetA.value = ""
        if (setA.size() > 0 && setB.size() > 0) {
            AinterB.textContent = setA.intersection(setB).values()
            AminusB.textContent = setB.difference(setA).values()
            union.textContent = setA.values() + "," + setB.values()
        }
    } catch (error) {
        if (error) {
            inputerror.textContent = error.message
            if (error) {
                setTimeout(() => {
                    inputerror.textContent = ""
                }, 3000);
            }

        }
    }

}

function submitB(e) {
    e.preventDefault()
    try {
        if (inputSetB.value === "") {
            throw new Error("can't be empty mate")
        }
        setB.add(inputSetB.value)
        setBvalues.textContent = setB.values()
        inputSetB.value = ""

        if (setA.size() > 0 && setB.size() > 0) {
            AinterB.textContent = setA.intersection(setB).values()
            AminusB.textContent = setB.difference(setA).values()
            union.textContent = setA.values() + "," + setB.values()
        }
    } catch (error) {
        if (error) {
            inputerror.textContent = error.message
            if (error) {
                setTimeout(() => {
                    inputerror.textContent = ""
                }, 3000);
            }

        }
    }
}


// setA.add("a")
// setB.add("b")
// setB.add("c")
// setB.add("a")
// setB.add("d")
// console.log(`SET A: ${setA.values()}`);
// console.log(`SET B: ${setB.values()}`);
// console.log(`is setA a subset of Set B? : ${setA.subset(setB)}`);
// console.log(`When Set A intercepts Set B: ${setA.intersection(setB).values()}`);
// console.log(`SetA minus setB: ${setB.difference(setA).values()}`);

// var setC = new Set()
// var setD = new Set()
// setC.add("a")
// setD.add("b")
// setD.add("c")
// setD.add("a")
// setD.add("d")
// console.log(setD.values())
// console.log(setD.has("a"));
// console.log(setD.add("d"));