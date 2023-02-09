
import { videos } from "./config/video-config.js";
import { checkPlayingTime } from "./service/checkTime.js";
import { DataForm } from "./ui/Input - data - form.js";
import { VideoPlayer } from "./ui/Video - player.js";
import { sleep } from "./utils/sleep.js";

const video = new DataForm("form-section", "video-section", videos)
const player = new VideoPlayer("video-section");

async function handlerFun(result) {
  const message = checkPlayingTime(result.time);
  if (message) {
    alert(message);
    return;
  }
  player.setUrl(result.video);
  player.start();
  await sleep(result.time * 1000);
  player.stop();
}
video.addHandler(handlerFun);

