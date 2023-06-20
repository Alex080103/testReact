const changeNav = document.getElementById('changeNav');
const changeNavButtons = changeNav.querySelectorAll("i");

changeNavButtons.forEach(function (button, index) {
    button.addEventListener("click", function() {
        toggleDisplayNavMobile();
    })
});

function toggleDisplayNavMobile() 
{
    changeNavButtons[0].classList.toggle ("!hidden");
    changeNavButtons[1].classList.toggle ("!hidden");
    navMobile.classList.toggle ("translate-x-[99vw]");
}