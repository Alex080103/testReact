import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Protected = ({isConnected, children }) => {
    const navigate = useNavigate();
    console.log(isConnected);
        if (isConnected !== true) {
            useEffect(() => {
                navigate("/Accueil");

            })
        } else {
            return children;
        }
}

export default Protected;