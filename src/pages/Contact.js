import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";
function ContactForm() {
    const [state, handleSubmit] = useForm("meqbjkva");
    if (state.succeeded) {
        return (
            <section className=" bg-[url('assets/img/homepage/bulles.jpg')] min-h-[80vh] bg-cover bg-fixed">
                <div className="inset-x-0 flex flex-col items-center sm:items-start justify-center inset-y-0 w-[95%] sm:w-[80%] lg:w-1/3 max-h-[200px] 
                lg:max-h-[250px] mx-auto my-auto absolute bg-gradient-to-tr from-green-900 via-green-800 to-green-600 md:p-8 p-4 
                text-2xl md:text-3xl text-main-white">
                    <p>Mail bien envoyé !</p>
                    <Link to="/" className="italic underline text-xl md:text-2xl">Retournez à l'accueil</Link>
                    </div>

            </section>
        )
    }
    return (
        <section className=" bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
            <Helmet>
                <meta name="description" content="Contactes la Mission Locale Sud Ardennes pour en apprendre plus sur nos accompagnements et trouvez celui qui te convient !"/>
                <title>Mission Locale Sud Ardennes / Contact</title>
                <link rel="canonical" href="/Contact"/>
            </Helmet>
          <div className="py-8 lg:py-16 px-4 mx-auto md:max-w-screen-md lg:max-w-screen-md">
              <h2 className="mb-4 text-5xl text-center text-main-pink font-title ">Nous Contacter</h2>
              <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 italic sm:text-xl">Si vous avez besoin d'informations ou souhaitez être recontacté par l'un de nos conseillers n'hésitez pas.</p>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 items-start 
               [&>div>label]:font-bold [&>div>label]:text-xl [&>div>label]:italic" >

                <div className="mt-0">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="text" id="email" name="email" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="nom@gmail.com" required></input>
                      <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-600 italic text-2xl"
                    />
                  </div>

                  <div className="mt-0">
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap">Votre téléphone (pas obligatoire)</label>
                      <input type="text" id="phone" name="phone" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="Votre téléphone"></input>
                  </div>
                  <ValidationError 
                      prefix="Phone" 
                      field="phone"
                      errors={state.errors}
                    />
                  <div>
                      <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 ">Votre ville de résidence</label>
                      <input type="text" id="adress" name="adress" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus-visible:outline-main-pink " placeholder="Votre adresse" required></input>
                  </div>
                  <ValidationError 
                      prefix="Adress" 
                      field="adress"
                      errors={state.errors}
                    />
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Le sujet de votre mail</label>
                      <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border
                       border-gray-600 shadow-sm focus-visible:outline-main-pink" placeholder="Le sujet de votre mail" required></input>
                  </div>
                  <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                    />
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Votre message</label>
                      <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-600 focus-visible:outline-main-pink " placeholder="Votre message..."></textarea>
                  </div>
                  <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-main-white rounded-lg bg-main-pink sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
              </form>
          </div>
        </section>
    )
}
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      return (
        <ContactForm/>
        );

}

export default Contact;