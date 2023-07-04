import { useEffect, useRef, useState } from "react";

register();

const SliderPosts = ({posts}) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  
    return (
        <section id="posts">
            <div className="w-11/12 justify-self-center mx-auto md:justify-self-auto pt-8 pb-12">
                {posts.length > 0 ?
                <swiper-container slides-per-view={ windowWidth >= 768 ? "2" : "1"} speed="500" loop="true" navigation="true"    
                autoplay="true" delay="500" disable-on-interaction="true"

                >
                    {posts.map((post, index) =>{
                        return (
                        <swiper-slide key={index} >
                                <div className="grid grid-cols-1 justify-items-center mx-auto xl:w-auto gap-2 md:gap-4 grid-rows-1">
                                  <div className="bg-main-white border-2 w-[95%] sm:w-[95%] grid grid-cols-2  h-auto md:w-11/12 xl:w-11/12 border-main-gray shadow-xl shadow-main-gray ">
                                    <div className="ml-4 p-4">
                                      <div className="flex items-center">
                                          <div className="">
                                              <a href="https://www.facebook.com/milosudardennes" target="_blank" className="text-blue-500 text-2xl underline">Mission Locale Sud Ardennes</a>
                                              <p><em>{post.date}</em></p>
                                          </div>
                                      </div>
                                      <p className=" mt-4 xl:line-clamp-[8] line-clamp-4">{post.texte}
                                      </p><a href="http.fauxlien.com " className="text-blue-500 underline">Voir plus</a>
                                    </div>
                                    <div className="w-full h-auto overflow-y">
                                      <img src={post.image} className="object-contain object-center h-auto" alt="affiche pour le forum"></img>
                                    </div>
                                  </div>
                                </div>
                        </swiper-slide>
                        )
                        
                    })}

                </swiper-container>
                : <p>No slides</p>}
            </div>
        </section>  
    )
}

export default SliderPosts;
