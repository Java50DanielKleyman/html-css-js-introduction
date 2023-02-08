import { videos } from "../config/video-config.js";

export function checkPlayingTime(time) {
    if (time >= videos.minTime && time <= videos.maxTime) {
    return "";
    }
    return `Playing time should be between ${videos.minTime} and ${videos.maxTime}.`;
}