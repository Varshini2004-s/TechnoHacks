let countUp;
let isRunning = false;
let timeElapsed = 0;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const messageContainer = document.getElementById('message'); // Use the id 'message' for the container

function updateTimeDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    timeDisplay.textContent = display;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        messageContainer.textContent = ''; // Clear the message when the timer starts
        countUp = setInterval(() => {
            timeElapsed++;
            updateTimeDisplay(timeElapsed);
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(countUp);
        isRunning = false;
        displayRunMessage(); // Display the message after stopping the timer
    }
}

function resetTimer() {
    stopTimer();
    timeElapsed = 0;
    updateTimeDisplay(timeElapsed);
    messageContainer.textContent = ''; // Clear the message when the timer is reset
}

function displayRunMessage() {
    const hours = Math.floor(timeElapsed / 3600);
    const minutes = Math.floor((timeElapsed % 3600) / 60);
    const secs = timeElapsed % 60;

    const runMessage = `The timer ran for ${hours} hour(s), ${minutes} minute(s), and ${secs} second(s).`;
    messageContainer.textContent = runMessage; // Display the message in the container
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the timer display
updateTimeDisplay(timeElapsed);
