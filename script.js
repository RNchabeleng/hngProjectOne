// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get elements by their data-testid attributes
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Display the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];
    currentDayOfTheWeek.textContent = `Today is: ${currentDay}`;
    
    // Update the real-time counter with milliseconds
    function updateRealTimeCounter() {
        const currentTime = new Date();
        const milliseconds = currentTime.getMilliseconds();
        const formattedTime = `${currentTime.toISOString().split('T')[1].split('.')[0]}.${milliseconds}`;
        currentUTCTime.textContent = `Time (UTC): ${formattedTime}`;
    }
    
    // Update the real-time counter every millisecond
    setInterval(updateRealTimeCounter, 1);
    
    // Initially update the real-time counter
    updateRealTimeCounter();
});

