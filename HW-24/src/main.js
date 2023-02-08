// import { sleep } from "./utils/sleep.js";
// const TIMEOUT = 5000;
// // const promise = sleep(TIMEOUT);
// // promise.then(() => console.log(`after ${TIMEOUT/1000} seconds`));
// // console.log(`waiting for ${TIMEOUT/1000} seconds`)
//  const fun = async () => {

import { videos } from "./config/video-config.js";
import { DataForm } from "./ui/Input - data - form.js";

    
//     await sleep(TIMEOUT);
//     console.log(`after ${TIMEOUT / 1000} seconds`)
// }
// fun();
// console.log(`waiting for ${TIMEOUT / 1000} seconds`)
// console.log("***************************")

const video = new DataForm("form-section", "video-section", videos)