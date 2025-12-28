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
