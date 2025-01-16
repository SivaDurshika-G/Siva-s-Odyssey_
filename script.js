window.onload = function() {
    showPopup("Siva, Welcomes you!");
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    popupText.innerText = message;
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}