// import { sleep } from "./utils/sleep.js";
// const TIMEOUT = 5000;
// // const promise = sleep(TIMEOUT);
// // promise.then(() => console.log(`after ${TIMEOUT/1000} seconds`));
// // console.log(`waiting for ${TIMEOUT/1000} seconds`)
//  const fun = async () => {

import { videos } from "./config/video-config.js";
import { checkPlayingTime } from "./service/checkTime.js";
import { DataForm } from "./ui/Input - data - form.js";
import { VideoPlayer } from "./ui/Video - player.js";


//     await sleep(TIMEOUT);
//     console.log(`after ${TIMEOUT / 1000} seconds`)
// }
// fun();
// console.log(`waiting for ${TIMEOUT / 1000} seconds`)
// console.log("***************************")

const video = new DataForm("form-section", "video-section", videos)
const player = new VideoPlayer("video-section");
// async function handlerFun(data) {
//    // const { playingTime, videoLink } = data;
// //     const message = checkPlayingTime(playingTime);
// //   if (message) {
// //     alert(message);
// //     return;
// //   }
//     player.setUrl(data.video);
//     player.start();
//     setTimeout(() => {
//         player.stop();
//       }, playingTime * 1000);
// }
 function handlerFun(result) {
    player.setUrl(result.video);
    document.getElementById("active-video").play()
    //player.start();
    setTimeout(() => {
        player.stop();
      }, data.time * 1000);
}
video.addHandler(handlerFun);

// video.addHandler((data) => {
//     handlerFun(data);
//   });