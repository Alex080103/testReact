
const tabulations = document.querySelectorAll(".tabulation");
const sections = document.querySelectorAll(".section");


tabulations.forEach(function(tabulation, index) {
    tabulation.addEventListener("click", function() {
        tabulations.forEach(function(tabulation, index) {
            sections[index].classList.add("hidden");
            tabulations[index].classList.remove("bg-main-pink");
            tabulations[index].classList.add("bg-main-gray");
        })  
        sections[index].classList.remove("hidden");
        tabulations[index].classList.remove("bg-main-gray");
        tabulations[index].classList.add("bg-main-pink");
    })
});
