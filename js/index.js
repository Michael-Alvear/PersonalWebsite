video = document.getElementById("mobileVid");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.getElementById("enterButton").addEventListener("click",function(){
    video.play();
})

video.addEventListener("ended", function() {
    // Redirect to your desired link
    window.location.href = "stat.html"; 
});