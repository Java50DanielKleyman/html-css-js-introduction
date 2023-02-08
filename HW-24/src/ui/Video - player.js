import { DataForm } from "./Input - data - form.js";

export class VideoPlayer {
    #url;
    #videoElement;
    #parentElement
    constructor(parentElementId) {
      this.#parentElement = document.getElementById(parentElementId);
      this.#videoElement = document.getElementById("active-video");
    }
    
    setUrl(url) {
        this.#url = url;
        this.#parentElement.innerHTML = `<video id="active-video" src="${this.#url}"></video>`;
        console.log(this.#parentElement.innerHTML)
    }
    
    start() {
        this.#videoElement.play();
      }
    
      stop() {
        this.#videoElement.pause();
      }
    }