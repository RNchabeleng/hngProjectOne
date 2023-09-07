document.addEventListener("DOMContentLoaded", function () {
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Display the current day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    currentDayOfTheWeek.textContent = `Today is: ${daysOfWeek[currentDate.getDay()]}`;
    
    // Update counter with milliseconds
// Update counter with UTC time in milliseconds
function updateRealTimeCounter() {
    const currentTime = new Date();
    const utcTimeMilliseconds = currentTime.getTime();
    currentUTCTime.textContent = `Time (UCT) in milliseconds: ${utcTimeMilliseconds}`;
}

    
    // Update counter every millisecond
    setInterval(updateRealTimeCounter, 1);

    updateRealTimeCounter();
});
