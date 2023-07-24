import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ProgressSteps from "../components/multiSteps/ProgessSteps";
import MultiSteps from "../components/multiSteps/MultiSteps";

const Formulaire = () => {
    const action = useParams();
    return (
        
        <section className=" bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
            <Helmet>
                <meta name="description" content="Contactes la Mission Locale Sud Ardennes pour en apprendre plus sur nos accompagnements et trouvez celui qui te convient !"/>
                <title>Mission Locale Sud Ardennes / Contact</title>
                <link rel="canonical" href="/Formulaire"/>
            </Helmet>
          <div className="py-8 lg:py-16 px-4 mx-auto md:max-w-screen-md lg:max-w-screen-md">
            {/* <MultiSteps isOpenStep={isOpenStep} numberOfSteps={2} content={[]}></MultiSteps> */}
              <h2 className="mb-8 md:mb-16 text-5xl text-center text-main-pink font-title ">Ajouter un membre</h2>
              <form  className="grid md:grid-cols-2 gap-8 items-start 
               [&>div>label]:font-bold [&>div>label]:text-xl [&>div>label]:italic" >

                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Votre nom</label>
                    <input type="text" id="name" name="name" className="block p-3 w-full text-sm text-gray-900  rounded-lg border
                      border-gray-600 shadow-sm focus-visible:outline-main-pink" placeholder="Votre Nom" required></input>
                </div>
                <div>
                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 ">Votre prénom</label>
                    <input type="text" id="surname" name="surname" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="Votre prénom" required></input>
                  </div>
                <div className="mt-0">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="text" id="email" name="email" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="nom@gmail.com" required></input>
                  </div>
                  <div className="mt-0">
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap">Votre téléphone</label>
                      <input type="text" id="phone" name="phone" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="Votre téléphone" required></input>
                  </div>
                  <div>
                      <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 ">Votre adresse</label>
                      <input type="text" id="adress" name="adress" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="Votre adresse" required></input>
                  </div>
                  <div>
                      <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Votre âge</label>
                      <input type="text" id="age" name="age" className="block p-3 w-full text-sm text-gray-900  rounded-lg border
                       border-gray-600 shadow-sm focus-visible:outline-main-pink" placeholder="Votre âge" required></input>
                  </div>
                  <div className="md:col-start-1 md:col-end-3 w-1/2 mx-auto">
                      <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Choisir un conseiller</label>
                      <select type="text" id="age" name="age" className="block p-3 w-full text-gray-900 border-gray-900 rounded-lg border
                       shadow-sm focus-visible:outline-main-pink font-bold" placeholder="Votre âge" required>
                        <option value={"Sylvie"}>Sylvie</option>
                        <option value={"Gérard"}>Gérard</option>
                       </select>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm md:col-start-1 md:col-end-3 font-medium text-center text-main-white rounded-lg bg-main-pink 
                   hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                    Valider
                </button>
              </form>
          </div>
        </section>
        
    )
}
export default Formulaire;