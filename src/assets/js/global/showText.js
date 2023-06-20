const showTextButtons = document.querySelectorAll(".showTextButton svg");
const showTexts = document.querySelectorAll(".showText");


showTextButtons.forEach(function(tabulation, index) {
    tabulation.addEventListener("click", function() {
        showText(showTextButtons[index], showTexts[index]);
    })
});

function showText(button, text)
{
    button.classList.toggle('-rotate-[270deg]');
    button.classList.toggle('bg-main-gray');

    console.log(button.classList)
    button.classList.toggle('-rotate-90');
    text.classList.toggle("hidden");
}