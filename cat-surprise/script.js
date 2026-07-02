const openButton = document.getElementById("openButton");

const introPage = document.getElementById("introPage");
const videoPage = document.getElementById("videoPage");
const endPage = document.getElementById("endPage");

const video = document.getElementById("surpriseVideo");

const box = document.querySelector(".box-container");
const cat = document.querySelector(".cat-main");

const decorativeCats = document.querySelectorAll(".bg-cat, .sleep-cat");

openButton.addEventListener("click", () => {

    openButton.disabled = true;

    // Hide button immediately
    openButton.classList.add("hide-button");

    // Shake the box
    box.classList.add("shake-box");

    // Cat pops out
    cat.classList.add("jump-cat");

    // Wait for the pop animation to finish
    setTimeout(() => {

        // Now fade away the intro
        introPage.classList.add("fade-out");

    }, 900);

    // After intro fades away...
    setTimeout(() => {

        introPage.style.display = "none";

        // Show the decorative cats
        decorativeCats.forEach(cat => {
            cat.classList.add("show-cats");
        });

        // Show the player
        videoPage.style.display = "flex";

        // Fade the player in
        videoPage.classList.add("fade-in");

        video.play();

    }, 1700);

});

video.addEventListener("ended", () => {

    videoPage.classList.remove("fade-in");

    videoPage.classList.add("fade-out");

    setTimeout(() => {

        videoPage.style.display = "none";

        endPage.style.display = "flex";

        endPage.classList.add("fade-in");

    }, 700);

});