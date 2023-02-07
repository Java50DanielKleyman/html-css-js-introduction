export class Tabs {
    #buttonsArr;
    #sectionClass;

    constructor(parentId, sectionClass, buttonsArr) {
        const parentElement = document.getElementById(parentId);
        this.#buttonsArr = buttonsArr;
        this.#sectionClass = sectionClass;
        const sectionElements = document.getElementsByClassName(this.#sectionClass)
        const buttonElements = document.getElementsByClassName("button");
        this.#buttonsArr.map(obj => parentElement.innerHTML += `<button type="submit" class="button"
        id="${obj.buttonId}">${obj.buttonName}</button>`).join('')

        this.#buttonsArr.forEach((odj) => {
            let buttonId = `${odj.buttonId}`
            let sectionId = `${odj.sectionId}`
            document.getElementById(buttonId).addEventListener("click", () => {
                for (let i = 0; i < sectionElements.length; i++) {
                    sectionElements[i].classList.remove("active-section-class");
                    sectionElements[i].classList.add("hidden-section-class");
                    buttonElements[i].classList.remove("active-button");
                    buttonElements[i].classList.add("inactive-button");
                }                
                document.getElementById(buttonId).classList.remove("inactive-button");
                document.getElementById(buttonId).classList.add("active-button");
                document.getElementById(sectionId).classList.remove("hidden-section-class");
                document.getElementById(sectionId).classList.add("active-section-class");
            })
        })
    }
}





