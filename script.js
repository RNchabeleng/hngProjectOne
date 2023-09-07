document.addEventListener("DOMContentLoaded", function () {
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Update the UTC time once
    function updateCurrentUTCTime() {
        const currentTime = new Date();
        const utcTimeMilliseconds = currentTime.getTime();
        currentUTCTime.textContent = `${utcTimeMilliseconds}`;
    }

    // Call the function to update the time once when the DOM is ready
    updateCurrentUTCTime();
});

