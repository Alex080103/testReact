const textPost = document.querySelectorAll('.textPost');
const oldTexts = [];
const newTexts = [];

textPost.forEach(function (text, index) { // Pour chaque element recupere le text et en crée un nouveau
    let oldText = text.innerHTML;
    let newText = text.innerHTML.substring(0, 250) + `.. <p onclick='showMore(${index})' class='underline cursor-pointer text-blue-500'>Voir plus</p>`
    text.innerHTML =  text.innerHTML.substring(0, 250) + `.. <p onclick='showMore(${index})' class='underline cursor-pointer text-blue-500'>Voir plus</p>`;
    oldTexts.push(oldText);
    newTexts.push(newText);

})

function showMore(id)  // Remplace le nouveau texte par l'ancien
{
    textPost[id].innerHTML = oldTexts[id] + `.. <p onclick='showLess(${id})' class='underline cursor-pointer text-blue-500'>Voir moins</p>`;
}

function showLess(id) { // Remplace l'ancien texte par le nouveau
    textPost[id].innerHTML = newTexts[id];
}