const redirect = document.getElementById("redirect");
const bubbles = redirect.querySelectorAll(".redirect-item");
const titles = redirect.querySelectorAll("h2");


function showItem (bubble) { // Fait apparaitre un element avec un degrade
    bubble.classList.add("animate-appear");
}

bubbles.forEach(function(bubble, index) { // Fait apparaitre chaque bulle de l'accueil
    setTimeout(function() {
        showItem(bubble);
    }, index * 1000);
})

titles.forEach(function(title, index) { // Fait apparaitre chaque titre de l'accueil
    setTimeout(function() {
        showItem(title);
    }, index * 1000);
})

