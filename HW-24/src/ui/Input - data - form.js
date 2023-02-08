export class DataForm {
   // #inputPlayingTime;
  //  #inputVideo;
    #formElement;
    #videoElement;
    #videos;
    #parentVideoElement;
  //  #videoSelectElement;
   // #inputElements

    constructor(idParentForm, idParentVideo, videos) {
        this.#videos = videos;
        //this.#inputElements = document.querySelectorAll("#video-form [name]");
     //   this.#inputPlayingTime = document.getElementsByName("playingTime");      
        this.#formElement = document.querySelector("form")
    //    this.#videoSelectElement = document.getElementById("select-video");
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
        if (!this.#parentVideoElement) {
            throw `wrong parent video id ${idParentVideo}`;
        }
        this.#formElement = document.getElementById("video-form");
        this.#videoElement = document.getElementById("select-video");
        this.setVideosSelect();
        this.setVideosElements();
        // this.#formElement.addEventListener('reset', (event) => {
        //   //  event.preventDefault();
        //     this.#formElement.reset();
        //     this.#inputElements.forEach(e => e.value='')
        //     this.setVideosSelect();            
        // })
        this.addHandler();
    }
    setVideosSelect() {
        this.#videoElement.innerHTML = this.#videos.videoLinks.map((video, index) =>
            `<option value="${video}">video-${index + 1}</option>`)
    }
    setVideosElements() {
        this.#parentVideoElement.innerHTML = this.#videos.videoLinks.map((video, index) =>
            `<video id="video-${index + 1}" src="${video}"></video>`)
    }
    addHandler() {
        this.#formElement.addEventListener('submit', (event) => {
            let timeValue = document.getElementById("playingTime").value;
            let videoValue = document.getElementById("select-video").value;
            console.log(videoValue);
        })
    }
}