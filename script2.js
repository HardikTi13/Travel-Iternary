function openPlanPage() {
    // Get the user's input from the form
    var days = document.getElementById("days").value;
    var destination = document.getElementById("destination").value;
  
    // Create a new URL for the plan page with the user's input as parameters
    var url = "plan.html?days=" + days + "&destination=" + destination;
  
    // Open the new page
    window.open(url, "_blank");
  }