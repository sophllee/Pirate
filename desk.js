var audio = document.getElementById('myAudio');
var playPauseButton = document.getElementById('playPauseButton');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        myAudio.loop=true;
        playPauseButton.innerHTML = "Pause Audio"
    }

    else{
        count = 0;
        audio.pause();
        playPauseButton.innerHTML = "Play Audio"
    }
}

var img = document.getElementById('onClickImage');

img.onclick=function(){
    window.location.href="./blenderVideo.html";
}
