const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailFont = document.querySelector(".details-title")
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-detailed-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    detailFont.style.color = anchor.getAttribute("color");

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i])
    })

}

