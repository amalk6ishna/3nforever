document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const mainSongCard = document.getElementById('main-song');
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const lyricsPanel = document.getElementById('lyrics-panel');
    const closeLyricsBtn = document.getElementById('close-lyrics');
    const playerTitle = document.getElementById('player-title');
    const playerImg = document.getElementById('player-img');

    let isPlaying = false;

    // Function to toggle play / pause
    function togglePlay() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    // When the album cover is clicked
    mainSongCard.addEventListener('click', () => {
        // Update Bottom Bar UI
        playerTitle.textContent = "Now Playing: 3 n forever";
        playerImg.style.display = "block";
        
        // Show Message / Lyrics Panel
        lyricsPanel.classList.add('active');
        
        // Ensure song plays if it isn't currently playing
        if (!isPlaying) {
            togglePlay();
        }
    });

    // When bottom play/pause button is clicked
    playPauseBtn.addEventListener('click', () => {
        // Only trigger if a song has actually been loaded
        if (playerTitle.textContent !== "Select a song") {
            togglePlay();
        }
    });

    // Close the lyrics panel
    closeLyricsBtn.addEventListener('click', () => {
        lyricsPanel.classList.remove('active');
    });
    
    // Reset button icon when song ends naturally
    audioPlayer.addEventListener('ended', () => {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
});
