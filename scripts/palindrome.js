const form = document.querySelector("#palindromeForm")
const input = document.querySelector("#palindrome")
const result = document.querySelector("#result")


form.addEventListener("submit", function Output(e) {
    e.preventDefault()

    if (result) {
        setTimeout(() => {
            result.textContent = ""
        }, 7000);
    }
    if (input.value == "") {
        result.textContent = "Can't be empty!"
        result.style.color = "red"
        return result
    }
    palindromeCheck()
})
const palindromeCheck = () => {
    let stack = []
    let word = input.value
    let reverseWord = ""
    for (let i = 0; i < word.length; i++) {
        stack.push(word[i])
    }
    for (let i = 0; i < word.length; i++) {
        reverseWord += stack.pop();
    }

    if (reverseWord === word) {
        result.textContent = "it is a palindrome!"
        result.style.color = "green"
        return result
    }
    result.textContent = `it is not a palindrome! "${word}" is not equal to "${reverseWord}"`
    result.style.color = "red"
    return result
}