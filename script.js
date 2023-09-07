document.addEventListener("DOMContentLoaded", function () {
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    currentDayOfTheWeek.textContent = `${daysOfWeek[currentDate.getUTCDay()]}`;
    
    function updateRealTimeCounter() {
        const currentTime = new Date();
        const utcTimeMilliseconds = currentTime.getTime();
        currentUTCTime.textContent = `${utcTimeMilliseconds}`;
    }
    
    updateRealTimeCounter();
});
