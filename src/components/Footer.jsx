import { Link, useLocation } from "react-router-dom";
import Connect from "./admin/Connect";

const Footer = ({setIsConnected}) => {
  const urlName = useLocation();
    return (
        <footer
          class="animateBackground bg-main-white border-main-pink border-t-2 w-full  first-letter:text-center  lg:text-left">
          <div class="p-2 flex flex-wrap justify-center gap-4  text-center text-gray-900 backdrop-blur-[0.8px]">
          <Link to="/Mentions"
              class=" w-1/3 text-lg md:text-2xl italic underline decoration-main-pink"
              >Mentions Légales</Link>
            <Link to="/Contact"
              class=" w-1/3 text-lg md:text-2xl italic underline decoration-main-pink"
              >Contact</Link>
            <p
              class=" w-full"
              >Tous droits réservés : Mission Locale Sud Ardennes</p>
            { urlName.pathname == "/Mentions" ? 
            <Connect setIsConnected={setIsConnected}/> : ""}
          </div>
        </footer>
    )
}

export default Footer;