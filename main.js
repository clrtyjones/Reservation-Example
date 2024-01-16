document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const okButton = document.getElementById('okButton');
    const startOverButton = document.getElementById('startOverButton');
    const stopwatch = document.getElementById('stopwatch');

    let startTime;
    let timerInterval;

    function showPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        startStopwatch();
    }

    function startStopwatch() {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateStopwatch, 10);
    }

    function updateStopwatch() {
        const currentTime = new Date().getTime();
        const elapsedMilliseconds = currentTime - startTime;

        const hundredths = Math.floor((elapsedMilliseconds % 1000) / 10);
        const seconds = Math.floor(elapsedMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);

        const formattedMinutes = padZero(minutes);
        const formattedSeconds = padZero(seconds % 60);
        const formattedHundredths = padZero(hundredths);

        stopwatch.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedHundredths}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    okButton.addEventListener('click', function () {
        hidePopup();
    });

    startOverButton.addEventListener('click', function () {
        location.reload(); // Reload the page
    });

    // Show the popup immediately
    showPopup();
});