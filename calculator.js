// Quiz answer checker
function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : null;
    const feedbackEl = document.getElementById('feedback');

    if (!feedbackEl) return;

    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! Well done.";
    } else {
        feedbackEl.textContent = "That's incorrect. Try again!";
    }
}

// Attach event listener to the "Submit Answer" button
const submitBtn = document.getElementById('submit-answer');
if (submitBtn) {
    submitBtn.addEventListener('click', checkAnswer);
}

// Calculator functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) return null; // indicate division by zero
    return number1 / number2;
}

// Helper to read input values safely
function getInputNumbers() {
    const number1 = parseFloat(document.getElementById('number1')?.value) || 0;
    const number2 = parseFloat(document.getElementById('number2')?.value) || 0;
    return { number1, number2 };
}

function displayCalcResult(value) {
    const resultEl = document.getElementById('calculation-result');
    if (!resultEl) return;
    resultEl.textContent = value;
}

// Attach event listeners for calculator buttons
const addBtn = document.getElementById('add');
if (addBtn) {
    addBtn.addEventListener('click', function () {
        const { number1, number2 } = getInputNumbers();
        const result = add(number1, number2);
        displayCalcResult(result);
    });
}

const subtractBtn = document.getElementById('subtract');
if (subtractBtn) {
    subtractBtn.addEventListener('click', function () {
        const { number1, number2 } = getInputNumbers();
        const result = subtract(number1, number2);
        displayCalcResult(result);
    });
}

const multiplyBtn = document.getElementById('multiply');
if (multiplyBtn) {
    multiplyBtn.addEventListener('click', function () {
        const { number1, number2 } = getInputNumbers();
        const result = multiply(number1, number2);
        displayCalcResult(result);
    });
}

const divideBtn = document.getElementById('divide');
if (divideBtn) {
    divideBtn.addEventListener('click', function () {
        const { number1, number2 } = getInputNumbers();
        const result = divide(number1, number2);
        if (result === null) {
            displayCalcResult('Cannot divide by zero');
        } else {
            displayCalcResult(result);
        }
    });
}
