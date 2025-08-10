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

let display_number_str = "";

function displayNum (num_button) {
    const number_select = num_button.textContent;
    const num_display = document.querySelector("#display_num");
    display_number_str += number_select
    num_display.textContent = display_number_str;
}

const number_btns = document.querySelectorAll(".num");
number_btns.forEach((num_btn) => {
    num_btn.addEventListener("click", () => displayNum(num_btn))
})