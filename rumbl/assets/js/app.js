import css from "../css/app.css"
import "phoenix_html"

import socket from "./socket"
import Video from "./video"

Video.init(socket, document.getElementById("video"))

// import Player from "./player"
// let video = document.getElementById("video")

// if (video) {
//     Player.init(video.id, video.getAttribute("data-player-id"), () => {
//         console.log("player ready!")
//     })
// }