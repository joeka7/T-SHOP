let mediaLog = window.matchMedia("(max-width: 767px)");
let emailInput = document.querySelector(".log-in-container form .email input");
let submitBtn = document.querySelector(".log-in-container form .submit-btn");
let socialMedia = document.querySelector(".log-in .log-in-container .log-in-social");
emailInput.addEventListener("click", function() {
    if (mediaLog.matches) {
        submitBtn.style.cssText = "display: block"
        socialMedia.style.cssText = "display: none"
    }
});