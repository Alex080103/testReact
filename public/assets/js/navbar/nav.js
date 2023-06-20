const nav = document.getElementById("nav");
let heightNav = nav.offsetHeight;
const navMobile = document.getElementById('navMobile');


const body = document.body;

removeHeight = -100;

window.addEventListener ("scroll", function () {
  heightNav = nav.offsetHeight;
  if (navMobile.classList.contains("translate-x-[99vw]") == true) {  
      //Defini prevScrollTop pour le premier scroll
      if (typeof prevScrollTop == "undefined") {
        prevScrollTop = 0;
      } 
      // une fois que la hauteur définie a été scroll, enlève la navbar
      if (body.getBoundingClientRect().top > removeHeight && this.window.screen.width > 762) {
        nav.classList.remove("-translate-y-["+heightNav+"px]");

      } else {
          if (body.getBoundingClientRect().top < prevScrollTop) {  // Si on scroll vers le haut (cherche la distance du haut actuelle puis compare à la précédente), affiche la navbar 
          nav.classList.add("-translate-y-["+heightNav+"px]");
          prevScrollTop = body.getBoundingClientRect().top;
        }
        if (body.getBoundingClientRect().top > prevScrollTop) { // Si on scroll vers le bas, pareil
                // nav.classList.remove("hidden");
                // nav.offsetHeight;
            nav.classList.remove("-translate-y-["+heightNav+"px]");

            prevScrollTop = body.getBoundingClientRect().top; // Définie la variable contenant la position précédente
            // const dropdown = nav.querySelector("#dropdown");

            // if (! dropdown.classList.contains("hidden")) { // Cache le dropdown si il est affiché lors du scroll
            //   dropdown.classList.add("hidden");
            // }
        }
      }
    }
  }
  );