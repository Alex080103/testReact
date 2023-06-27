const Contact = () => {
    return (
        <section className=" bg-[url('assets/img/homepage/bulles.jpg')] bg-cover bg-fixed">
          <div className="py-8 lg:py-16 px-4 mx-auto md:max-w-screen-md lg:max-w-screen-md">
              <h2 className="mb-4 text-5xl text-center text-main-pink font-title ">Nous Contacter</h2>
              <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 italic sm:text-xl">Si vous avez besoin d'informations on souhaiter être recontacté par l'un de nos conseillers n'hésitez pas.</p>
              <form action="#" className="grid md:grid-cols-2 gap-8 items-start 
               [&>div>label]:font-bold [&>div>label]:text-xl [&>div>label]:italic" >
                <div className="mt-0">
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="nom@gmail.com" required></input>
                  </div>
                  <div className="mt-0">
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Votre numéro de téléphone</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre téléphone" required></input>
                  </div>
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Votre adresse</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre adresse" required></input>
                  </div>
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Le sujet de votre mail</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Le sujet de votre mail" required></input>
                  </div>
                  
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Votre message</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre message..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-main-white rounded-lg bg-main-pink sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
              </form>
          </div>
        </section>
    )
}

export default Contact