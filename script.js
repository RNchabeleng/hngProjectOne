document.addEventListener("DOMContentLoaded", function () {
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Display the current day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    currentDayOfTheWeek.textContent = `Today is: ${daysOfWeek[currentDate.getDay()]}`;
    
    // Update counter with milliseconds
    function updateRealTimeCounter() {
        const currentTime = new Date();
        currentUTCTime.textContent = `Time (UTC): ${currentTime.toISOString().substr(11, 12)}`;
    }
    
    // Update counter every millisecond
    setInterval(updateRealTimeCounter, 1);

    updateRealTimeCounter();
});
