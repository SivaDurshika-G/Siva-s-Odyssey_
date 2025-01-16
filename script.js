function showPopup(text) {
  document.getElementById('popup-text').innerText = text;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}