/*current year alert and timestamp */
document.addEventListener("DOMContentLoaded", function () {
    // Get the copyright year and set it dynamically
    const copyrightYearElement = document.getElementById("copyrightYear");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = currentYear;

    // Get the last modified date and set it dynamically
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
});
