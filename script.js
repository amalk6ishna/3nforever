const audio = document.getElementById("audio");

function openAlbum(){

document.getElementById("albumPage").classList.remove("hidden");

audio.play();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function playSong(){

audio.play();

}
