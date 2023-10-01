document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();

    // Check if there's a previous visit date in localStorage
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    // If it's the user's first visit, set the welcome message
    if (!lastVisitDate) {
        document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Parse the stored last visit date
        const lastVisit = new Date(lastVisitDate);

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - lastVisit;

        // Calculate the number of days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display the appropriate message based on the time difference
        if (daysDifference === 0) {
            document.getElementById("message").textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysDifference === 1 ? "" : "s";
            document.getElementById("message").textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    // Store the current date as the last visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});
