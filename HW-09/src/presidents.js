const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailFont = document.querySelector(".details-title")
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector("main");
const hideButtonElement = document.getElementById("hide-button");
const HIDDEN = "hidden";
function showDetails() {
    mainElement.classList.remove(HIDDEN);
}
function hideDetails() {
    mainElement.classList.add(HIDDEN);
}
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-detailed-image");/* =anchor.dataset.detailsImage*/
    detailsImage.src = dataImage;
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    detailFont.style.color = "blue";

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i])
    })
}
hideButtonElement.addEventListener("click", hideDetails);
