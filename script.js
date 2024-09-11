// Wait for the whole page to load before running this code
document.addEventListener('DOMContentLoaded', () => {
    // Set the range for our random number
    const minNumber = 1;
    const maxNumber = 25;

    // Create a random number between 1 and 25
    const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    // Get the elements we need to work with
    const userGuessInput = document.getElementById('userGuess');
    const submitGuessButton = document.getElementById('submitGuess');
    const resultParagraph = document.getElementById('result');

    // Function to run when the user clicks the "Submit" button
    const handleGuess = () => {
        // Get the user's guess from the input field and turn it into a number
        const userGuess = parseInt(userGuessInput.value, 10);

        // Check if the guess is valid
        if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
            // If the guess is not valid, show an error message
            resultParagraph.textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
            resultParagraph.className = 'incorrect'; // Make the text red for errors
            return; // Stop the function if the input is invalid
        }

        // Compare the user's guess to the secret number
        if (userGuess === secretNumber) {
            // If the guess is right, congratulate the user
            resultParagraph.textContent = 'Congratulations! You guessed the right number!';
            resultParagraph.className = 'correct'; // Make the text green for a correct guess
        } else if (userGuess < secretNumber) {
            // If the guess is too low, tell the user to guess higher
            resultParagraph.textContent = 'Too low! Guess a higher number.';
            resultParagraph.className = 'incorrect'; // Make the text red for wrong guesses
        } else {
            // If the guess is too high, tell the user to guess lower
            resultParagraph.textContent = 'Too high! Guess a lower number.';
            resultParagraph.className = 'incorrect'; // Make the text red for wrong guesses
        }
    };

    // When the button is clicked, run the handleGuess function
    submitGuessButton.addEventListener('click', handleGuess);
});
