function add (a, b) {
    return a + b;
}

function substract (a, b) {
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
            return substract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}