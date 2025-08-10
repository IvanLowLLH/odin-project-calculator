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
    if (b === 0) {
        alert("Trying to create a black hole eh!");
        return "ERR"
    }
    else {
        return a / b;
    }
    
}


let display_number_str = "0";
let prev_number_str = "";
let prev_operator_select = "";

function updateDisplayNum (num_button) {
    const number_select = num_button.textContent;
    if (display_number_str === "0") {
        if (number_select !== "0") {
            display_number_str = "";
            display_number_str += number_select;
        }
    }
    else {
        display_number_str += number_select;
    }
    displayNum();
}

function displayNum () {
    const num_display = document.querySelector("#display_num");
    num_display.textContent = display_number_str;
}

const number_btns = document.querySelectorAll(".num");
number_btns.forEach((num_btn) => {
    num_btn.addEventListener("click", () => updateDisplayNum(num_btn))
})

function selectOperator(op_button) {
    const operator_select = op_button.id
    if (prev_number_str.length === 0) {
        prev_number_str = display_number_str
    }
    else {
        if (display_number_str.length !== 0) {
            operate();
        }
    }
    display_number_str = "";
    prev_operator_select = operator_select;    
}

function operate() {
    const a = Number(prev_number_str);
    const operator = prev_operator_select;
    const b = Number(display_number_str);
    console.log(`Operating ${a} ${operator} ${b}`)
    let result = 0;
    switch (operator) {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }
    display_number_str = result.toString();
    prev_number_str = display_number_str
    displayNum();
}

function clear () {
    display_number_str = "0";
    prev_number_str = "";
    prev_operator_select = "";
    displayNum();
}

function equal_result () {
    operate();
    prev_number_str = "";
}

const op_btns = document.querySelectorAll(".op_btn");
op_btns.forEach((op_btn) => {
    op_btn.addEventListener("click", () => selectOperator(op_btn))
})

const equal_btn = document.querySelector("#equal");
equal_btn.addEventListener("click", ()=>equal_result());

const clear_btn = document.querySelector("#clear");
clear_btn.addEventListener("click", ()=>clear());