document.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById("timestamp");
    var currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
  });