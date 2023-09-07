// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get elements by their data-testid attributes
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    const githubURL = document.querySelector('[data-testid="githubURL"]');
    
    // Display the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];
    currentDayOfTheWeek.textContent = currentDay;
    
    // Update the current UTC time in real-time
    function updateUTCTime() {
        const currentUTCTimeValue = new Date().toISOString();
        currentUTCTime.textContent = currentUTCTimeValue;
    }
    
    // Update the UTC time every second
    setInterval(updateUTCTime, 1000);
    
    // Set your track
    myTrack.textContent = "Frontend";
    
    // Set your GitHub repository URL
    githubURL.href = "https://github.com/yourusername/your-repo";
    
    // Initially update the UTC time
    updateUTCTime();
});
