import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70dvh] my-8 md:mt-16">
            <Helmet>
                <meta name="description" content="Error 404"/>
                <title>Erreur</title>
            </Helmet>
            <img src="/assets/img/error.jpg" className="md:w-1/2 lg:w-auto mx-auto"></img>
            <div className="flex flex-col gap-8">
                <h2 className="text-5xl font-title text-center md:text-6xl text-main-red">Page Introuvable</h2>
                <Link className="underline text-blue-700 text-center mt-4 italic text-2xl md:text-3xl" to="/Accueil">Retournez à l'accueil</Link>
            </div>
        </section>
    )
}

export default Error404;