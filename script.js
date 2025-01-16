function showPopup(link) {
    const popupContent = `<p>Click <a href="${link}" target="_blank">here</a> to visit the LinkedIn post.</p><button onclick="closePopup()">Close</button>`;
    document.getElementById("popup").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}