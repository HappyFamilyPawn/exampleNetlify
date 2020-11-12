// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Show Loader
  document.getElementById("loading").style.display = "block";
 
  setTimeout(calculateResults, 1000);
 
  e.preventDefault();
});
 
// Calculate Results
function calculateResults() {
 
  const amount = document.getElementById("amount");
  const text = document.getElementById("text");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
 
  const principal = (amount.value);
  const calculatedInterest = (text.value);
  const calculatedPayments = (years.value);
  
 
  // Computed Monthly payment
  const x = Math.pow(calculatedInterest, calculatedPayments);
  const monthly = (principal / calculatedPayments) + (principal * calculatedInterest / 100);
 
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (principal / calculatedPayments).toFixed(2);
    totalInterest.value = (principal * calculatedInterest / 100).toFixed(2);

 
    // Show Results
    document.getElementById("result").style.display = "block";
 
    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check number inputs");
  }
}
 
// Show Error
function showError(error) {
  // Hide Results
  document.getElementById("result").style.display = "none";
 
  // Hide Loader
  document.getElementById("loading").style.display = "none";
 
  // Create a div
  const errorDiv = document.createElement("div");
 
  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
 
  // Add class
  errorDiv.className = "alert alert-danger";
 
  // Create text node and append div
  errorDiv.appendChild(document.createTextNode(error));
 
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
 
  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);
 
  // Clear Error
  function clearError() {
    document.querySelector(".alert").remove();
  }
}