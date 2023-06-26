const Contact = () => {
    return (
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto md:max-w-screen-md lg:max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Nous contacter</h2>
              <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 italic sm:text-xl">Si vous avez besoin d'informations on souhaiter être recontacté apr l'un de nos conseillers n'hésitez pas.</p>
              <form action="#" className="space-y-4">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="email" id="email" className="shadow-sm  border border-gray-600 text-gray-900  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required></input>
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Votre numéro de téléphone</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre téléphone" required></input>
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Votre adresse</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre adresse" required></input>
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Le sujet de votre mail</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Le sujet de votre mail" required></input>
                  </div>
                  
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Votre message</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 " placeholder="Votre message..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-main-white rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
              </form>
          </div>
        </section>
    )
}

export default Contact