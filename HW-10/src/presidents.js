const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailFont = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container");
const detailsAudio = document.getElementById("audio");

const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector("main");
const hideButtonElement = document.getElementById("hide-button");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
function showDetails(){
mainElement.classList.remove(HIDDEN);
detailsContainer.classList.add(IS_POINT);
setTimeout(function(){
    detailsContainer.classList.remove(IS_POINT);
})


}
function hideDetails() {
    mainElement.classList.add(HIDDEN);
}
function setDetails(anchor) {
   
    detailsImage.src = anchor.getAttribute("data-detailed-image");/* =anchor.dataset.detailsImage*/
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    detailFont.style.color = "blue";
    detailsAudio.src = anchor.getAttribute("data-detailed-audio");
    
    
    detailsAudio.currentTime = 0;
    detailsAudio.play();
    setInterval(function(){
        if(detailsAudio.currentTime>11)
        detailsAudio.pause()
    })
    
    
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i])
    })
}
hideButtonElement.addEventListener("click", hideDetails);
hideButtonElement.addEventListener("click",function(){
    detailsAudio.pause()})
