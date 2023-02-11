// scroll icon 
let arrowIcon = document.querySelector(".arrow-icon");
let media = window.matchMedia("(max-width: 767px)");
window.onscroll = function() {
    if (media.matches) {
        if (window.scrollY >= 600) {
            arrowIcon.style.cssText = "display: block";
        } else{
            arrowIcon.style.cssText = "display: none";
        };
    };
};
arrowIcon.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// arrowIcon.onclick = function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };
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
let backgroundOption = true;
let backgroundInterval;
// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    };
    // Remove Active Class From All Spans
    document.querySelectorAll(".random-background span").forEach(e => {
        e.classList.remove("active");
    });
    if (backgroundLocalItem === "true") {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }
};
// Switch Random Background Option
const randomBackgroundsEle = document.querySelectorAll(".random-background span")
randomBackgroundsEle.forEach(li => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomImgs();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        };
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
};
// Change Background Image
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
// Random Background Option
function randomImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("/imgs/T-SHOP_'+ imgsArray[randomNumber] +'")';
        }, 8000);
    };
};
randomImgs();