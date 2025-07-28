// Step 1: Implement Arithmetic Functions

// Add function
function add(number1, number2) {
    return number1 + number2;
}

// Subtract function
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiply function
function multiply(number1, number2) {
    return number1 * number2;
}

// Divide function
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by 0";
    }
    return number1 / number2;
}

// Step 2: Attach Event Listeners to Operation Buttons

// Addition button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Division button
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
