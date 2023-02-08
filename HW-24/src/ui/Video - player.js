export class VideoPlayer {
    constructor(parentElementId) {
      this.parentElement = document.getElementById(parentElementId);
      this.videoElement = document.createElement("video");
      this.parentElement.appendChild(this.videoElement);
    }
    
    setUrl(url) {
      this.videoElement.src = url;
    }
    
    start() {
      this.videoElement.play();
    }
    
    stop() {
      this.videoElement.pause();
    }
  }