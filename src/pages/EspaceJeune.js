import { useEffect, useState } from "react"

function appearAllBranch() {
    const redirect = document.getElementById("branchContainer");
    const bubbles = redirect.querySelectorAll(".branch");
  
    function showItem (bubble) { // Fait apparaitre un element avec un degrade
        bubble.classList.add("animate-appear");
    }
    
    bubbles.forEach(function(bubble, index) { // Fait apparaitre chaque bulle de l'accueil
        setTimeout(function() {
            showItem(bubble);
        }, index * 1500);
    })

  }


const EspaceJeune = () => {

    useEffect(() => {
        appearAllBranch();
    }, [])

    const [images, setImages] = useState([]);

    return (
    <div  className="h-auto w-[100vw] aspect-video relative bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
        <div id="branchContainer" className="backdrop-blur-[1px] hidden md:block h-full w-full">
            <img src="assets\img\jeunePage\1-_SHEMA_ORIENTATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
            <img src="assets\img\jeunePage\2-_SHEMA_FORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
            <img src="assets\img\jeunePage\3-_SHEMA_EMPLOI.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
            <img src="assets\img\jeunePage\4-_SHEMA_PROMO_DES_METIERS.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
            <img src="assets\img\jeunePage\5-_SHEMA_VIE_QUOTIDIENNE.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
            <img src="assets\img\jeunePage\6-_SHEMA_INFORMATION.png" className="branch transition-all opacity-0 absolute w-full bg-transparent h-full"/>
        </div>
        <img src="assets\img\jeunePage\page_jeunes_thematiques-mobile.jpg" className="object-cover md:hidden w-full"></img>
    </div>
    )
}

export default EspaceJeune