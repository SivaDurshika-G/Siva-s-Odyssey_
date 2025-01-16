function showPopup(link) {
  const popupContent = `
    <p>Click <a href="${link}" target="_blank" rel="noopener noreferrer">here</a> to visit the LinkedIn post.</p>
    <button onclick="closePopup()">Close</button>
  `;
  document.getElementById("popup-text").innerHTML = popupContent;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}