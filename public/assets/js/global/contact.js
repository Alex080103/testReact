const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");
let addWidth = contactInfo.offsetWidth;
let translate = "translate-x-[" + addWidth + "px]";
contactInfo.classList.add("-" + translate);


contactButton.addEventListener("click", function() {
    
    contactInfo.classList.toggle("opacity-0");
    contactInfo.classList.remove("transition-none");
    contactInfo.classList.add("transition-all");
    contactInfo.classList.toggle("-" + translate);
    contactButton.classList.toggle(translate);
    contactButton.classList.toggle("animate-pulse");
})