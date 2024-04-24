var video;
let activeSong =0;
let sources = ["https://michael-alvear.github.io/PersonalWebsite/images/bigIron.mp3", "https://michael-alvear.github.io/PersonalWebsite/images/kick.mp3"];
data = document.body.getElementsByTagName("main")[0];
songs = document.getElementById("radioContainer").getElementsByTagName("ul")[0].getElementsByTagName("li");
songs[0].classList.add("activeSong");
window.addEventListener("load",function(){
    data.style.opacity = 1;
    data.style.transition = "opacity 1s linear"
    video = document.querySelector("#player1");
    video.src = sources[0];
    video.autoplay = false;
});


for (let i = 0; i < songs.length; ++i) {
    songs[i].addEventListener("click", (function(index) {
        return function(event) {
            clickSpecial(event, index);
        };
    })(i));
    songs[i].addEventListener("keydown", function(event) {
        // Check if Enter key is pressed
        if (event.key === "Enter") {
            clickSpecial(event, i);
        }
    });
    
}

function clickSpecial(event, index){
    console.log("Changing Song");
    video.src = sources[index];

    for (let i = 0; i < songs.length; ++i) {
        songs[i].classList.remove("activeSong");
    }

    event.target.classList.add("activeSong");

}



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
