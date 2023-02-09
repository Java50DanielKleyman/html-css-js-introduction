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
  }

  start() {
    //this.#videoElement.play();
    document.getElementById("video-section").classList.remove("hidden-video-section")
    document.getElementById("video-section").classList.add("active-video-section")
    document.getElementById("active-video").play();
  }

  stop() {
    // this.#videoElement.pause();    
    document.getElementById("active-video").pause();
    document.getElementById("video-section").classList.remove("active-video-section")
    document.getElementById("video-section").classList.add("hidden-video-section")
  }
}