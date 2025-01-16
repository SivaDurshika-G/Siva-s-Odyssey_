// Show the popup with a welcome message when the page loads
window.onload = function() {
  showPopup('Siva,Welcomes you Heartfully!');
};

// Function to show the popup with custom message
function showPopup(message) {
  var popup = document.getElementById('popup');
  var popupText = document.getElementById('popup-text');
  popupText.innerText = message;
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}