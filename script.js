function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

let display_number = 0;

function displayNum (num_button) {
    const number = num_button.textContent;
    const num_display = document.querySelector("#display_num");
    num_display.textContent = number;
}

const number_btns = document.querySelectorAll(".num");
number_btns.forEach((num_btn) => {
    num_btn.addEventListener("click", () => displayNum(num_btn))
})