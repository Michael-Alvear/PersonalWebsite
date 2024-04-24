data = document.body.getElementsByTagName("main")[0];
window.addEventListener("load",function(){
    data.style.opacity = 1;
    data.style.transition = "opacity 1s linear"
});


let specials = document.getElementById("specialDivs").getElementsByTagName("div");
console.log(specials);
// console.log(specials.getElementsByTagName("div")[0]);
let specialTexts = ["Hey there! I'm all about diving deep into the world of computer science. Whether it's tinkering with C++, Python, HTML, CSS, Javascript, SQL, Machine Learning, AI, and DJango I've got it covered. And when it comes to planning and strategy, I'm your guy, whether it's coding up a storm or orchestrating events.",
"Beyond just coding, I'm fueled by the drive to use technology for real-world solutions. Projects like my AI Generative Travel Itinerary and the Classification Machine Learning Model showcase this passion. Plus, I'm all about advocating for mental health awareness, as seen through initiatives like organizing The Mindful Gathering event last Winter!",
"Expertise: Dive deep into my world, and you'll find a solid foundation in computer science. From mastering languages like C++ and Python to handling web tech like HTML, CSS, Javascript and SQL, I've got it down pat. Plus, courses like EECS 280/281 have equipped me with the skills in data structures and algorithms. And hey, those projects? They've given me some serious know-how in how to plan and execute a project with deadlines.",
" Innovation is my playground, and I'm always eager to explore new avenues of expression. Whether it's coding up imaginative solutions to complex problems or crafting captivating narratives through interactive experiences, creativity is the fuel that keeps me going. From designing user-friendly interfaces to dreaming up unique game mechanics, I'm constantly pushing the boundaries of what's possible. After all, in a world driven by innovation, creativity is the key that unlocks endless possibilities.",
"When it comes to getting things done, I'm all about taking the lead. Whether it's diving headfirst into a new project or spearheading initiatives like organizing events, I'm always ready to roll up my sleeves and make things happen.",
"Uptil Now, it's been all about my coding experience these past few years but I wan't to talk about the rest of me! I love playing saxophone whenever I get the chance. I've been awarded numerous awards over the my years of playing from UIL and other conpetitions. But personally, I think when I deadlifted 400 lbs is an even cooler achievement (it was crazy hard). I also love biking, I biked to work for a whole summer! ",
"Leading by example is my motto. Whether it's setting clear milestones and deadlines for collaborative projects or overseeing strategies for events, I thrive on bringing out the best in myself and those around me. Throughout my life I've had my brothers that could tutor me and because of that I wanted to help others the same way they did, by volunteering and getting friends to volunteer at a local tutoring organization in my hometown that tutored underpriviliaged kids in Dallas. This is how I lead!"]

for (let i = 0; i < specials.length; ++i) {
    specials[i].addEventListener("mouseover", function(event) {
        hoverSpecial(event, i);
    });
    specials[i].addEventListener("focus", function(event) {
        hoverSpecial(event, i);
    });
}

let targetImg = document.getElementById("specialImg");
let targetBio = document.getElementById("specialImgBio");
function hoverSpecial(event, index){
    targetImg.src = '/images/special' + index +'.gif';
    targetBio.innerHTML = specialTexts[index];
}