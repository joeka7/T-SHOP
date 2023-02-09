// Toggle Sping Class On Icon
document.querySelector(".toggle-settings i").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};
// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // Set Color On Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);
        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // Add Active Class On Self
        e.target.classList.add("active");
    });
});
// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);
    // Remove Active Class in Local Storage
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        // Add Active Class To Local Storage
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        };
    });
}
// Change Background Image
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("/imgs/T-SHOP_'+ imgsArray[randomNumber] +'")';
}, 8000);