document.addEventListener("DOMContentLoaded", () => {
  const videoPlayers = document.querySelectorAll(".video-player");

  videoPlayers.forEach((player) => {
    const video = player.querySelector("video");
    const overlay = player.querySelector(".play-button-overlay");

    player.addEventListener("click", () => {
      if (video.paused || video.ended) {
        video.play();
        player.classList.add("playing");
        video.controls = true;
      } else {
        video.pause();
        player.classList.remove("playing");
        video.controls = false;
      }
    });

    video.addEventListener("ended", () => {
      player.classList.remove("playing");
      video.controls = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videoPlayers = document.querySelectorAll(".video-player1");

  videoPlayers.forEach((player) => {
    const video = player.querySelector("video");
    const overlay = player.querySelector(".play-button-overlay1");

    player.addEventListener("click", () => {
      if (video.paused || video.ended) {
        video.play();
        player.classList.add("playing");
        video.controls = true;
      } else {
        video.pause();
        player.classList.remove("playing");
        video.controls = false;
      }
    });

    video.addEventListener("ended", () => {
      player.classList.remove("playing");
      video.controls = false;
    });
  });
});

var dateElement = document.querySelector(".start-date");
var tomorrowDate = new Date();
tomorrowDate.setTime(tomorrowDate.getTime() + 24 * 60 * 60 * 1000);
var tomorrowDayOfMonth = tomorrowDate.getDate();
var monthName = "октября";
dateElement.innerHTML =
  "Старт завтра" + ",  " + tomorrowDayOfMonth + "  " + monthName;
