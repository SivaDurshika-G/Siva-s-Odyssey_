// Function to show the popup with a given link
function showPopup(url) {
  const popupText = document.getElementById('popup-text');
  popupText.innerHTML = `You can view more here: <a href="${url}" target="_blank">${url}</a>`;
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}