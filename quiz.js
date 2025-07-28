// Step 1: Define the function to check the user's answer
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4"; // The correct answer is 4

    // Step 3: Retrieve the user's answer by selecting the checked radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Step 4: Compare the user's answer with the correct answer
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        // Step 5: If the answer is correct
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Green feedback for correct answer
    } else {
        // Step 6: If the answer is incorrect
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Red feedback for incorrect answer
    }
}

// Step 7: Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);