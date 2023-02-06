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
                    sectionElements[i].style.display = "none";
                    buttonElements[i].style.backgroundColor = "grey";
                }
                document.querySelector(".div-class").style.marginTop = "5vh"
                document.getElementById(buttonId).style.backgroundColor = "cornflowerblue";
                document.getElementById(sectionId).style.display = "block";
            })
        })
    }
}





