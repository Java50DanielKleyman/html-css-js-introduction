
export class DataForm {  
    #formElement;
    #videoElement;
    #videos;
    #parentVideoElement;
    #timeValue;
    #videoValue;
  //  submitResult;
  
    constructor(idParentForm, idParentVideo, videos) {
        
        this.#videos = videos;            
        this.#formElement = document.querySelector("form")   
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent form id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="video-form">
            <div class="input">
              <input required id="playingTime" name="playingTime" type="number" placeholder="enter playing time" class="form-input">
            </div>
            <div class="form-select-group">
                <label>Select video</label>
                <select name="video" id="select-video" class="form-select">
                    <option value="uuuu"></option>                    
                </select>
            <div class="form-buttons">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
        `
        this.#parentVideoElement = document.getElementById(idParentVideo);
        this.#timeValue= document.getElementById("playingTime");
        this.#videoValue =document.getElementById("select-video");
        if (!this.#parentVideoElement) {
            throw `wrong parent video id ${idParentVideo}`;
        }
        this.#formElement = document.getElementById("video-form");
        this.#videoElement = document.getElementById("select-video");
        this.setVideosSelect();
     //   this.setVideosElements();
        // this.#formElement.addEventListener('reset', (event) => {
        //   //  event.preventDefault();
        //     this.#formElement.reset();
        //     this.#inputElements.forEach(e => e.value='')
        //     this.setVideosSelect();            
        // })
        //this.addHandler();
    }
    setVideosSelect() {
        this.#videoElement.innerHTML = this.#videos.videoLinks.map((video, index) =>
            `<option value="${video}">video-${index + 1}</option>`)
    }
    // setVideosElements() {
    //     this.#parentVideoElement.innerHTML = this.#videos.videoLinks.map((video, index) =>
    //         `<video id="video-${index + 1}" src="${video}"></video>`)
    // }
    addHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {             
            event.preventDefault(); 
            const result={"time": this.#timeValue.value, "video": this.#videoValue.value}             
             handlerFun(result);
        })
    }
}
