data = document.body.getElementsByTagName("main")[0];
window.addEventListener("load",function(){
    data.style.opacity = 1;
    data.style.transition = "opacity 1s linear"
});


function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery-inner');
    const scrollAmount = 200; // Adjust scroll amount as needed

    if (direction === 1) {
        gallery.scrollLeft += scrollAmount;
    } else {
        gallery.scrollLeft -= scrollAmount;
    }

    // Loop gallery if end is reached
    if (gallery.scrollLeft === 0) {
        gallery.scrollLeft = gallery.scrollWidth;
    } else if (gallery.scrollLeft === gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0;
    }
}

cards = document.body.getElementsByClassName("card")

for (let i = 0; i < cards.length; ++i) {
    cards[i].addEventListener("mouseover", hoverSpecial);
    cards[i].addEventListener("mouseout", unhoverSpecial);
    cards[i].addEventListener("focus", hoverSpecial);
    cards[i].addEventListener("blur", unhoverSpecial);
}

function hoverSpecial(){
    let hTag = this.getElementsByTagName("h2")[0];
    let pTag = this.getElementsByTagName("p")[0];
    this.style.backgroundColor = "rgb(117,247,80)";
    this.style.color = "rgb(0,0,0)";
    

    hTag.style.fontSize = "40px"
    pTag.style.fontSize = "13px"
    hTag.style.transition = "font-size .35s";
    pTag.style.transition = "font-size .35s";
}

function unhoverSpecial(){
    let hTag = this.getElementsByTagName("h2")[0];
    let pTag = this.getElementsByTagName("p")[0];
    this.style.backgroundColor = "rgb(0,0,0)";
    this.style.color = "rgb(117,247,80)";

    hTag.style.fontSize = "30px"
    pTag.style.fontSize = "10px"
    hTag.style.transition = "font-size .35s";
    pTag.style.transition = "font-size .35s";
}