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
        
        for (let i = 0; i < this.#buttonsArr.length; i++) {
            let buttonId = `${this.#buttonsArr[i].buttonId}`
            let sectionId = `${this.#buttonsArr[i].sectionId}`
            document.getElementById(buttonId).addEventListener("click", function () {
                for (let i = 0; i < sectionElements.length; i++) {
                    sectionElements[i].style.display = "none";
                    buttonElements[i].style.backgroundColor = "cornflowerblue";
                }   
                document.querySelector(".div-class").style.marginTop = "5vh"             
                document.getElementById(buttonId).style.backgroundColor = "grey";
                document.getElementById(sectionId).style.display = "block";                
            })
        }
    }
}





