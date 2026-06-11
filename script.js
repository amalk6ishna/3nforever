const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");

function playSong(file, title) {
  audio.src = file;
  audio.play();
  nowPlaying.textContent = "Now Playing: " + title;
}
