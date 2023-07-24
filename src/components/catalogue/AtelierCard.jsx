import { Link } from "react-router-dom";

const AtelierCard = () => {
    return (

<div class="flex flex-wrap place-items-center h-auto">
    <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <Link to={"/Atelier/:1"} class="w-full block h-full">
            <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
            <div class="bg-white w-full p-4">
                <p class="text-main-pink text-2xl font-medium">
                    Should You Get Online Education?
                </p>
                <p class="text-gray-800 text-sm font-medium mb-2">
                    A comprehensive guide about online education.
                </p>
                <p class="text-gray-600 font-light text-md">
                    It is difficult to believe that we have become so used to having instant access to information at...
                    <a class="inline-flex text-main-pink" href="#">Read More</a>
                </p>
                <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span class="m-1 px-2 py-1 rounded bg-main-pink">
                        #online
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-main-pink">
                        #internet
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-main-pink">
                        #education
                    </span>
                </div>
                <div class="flex items-center mt-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'>
                    </img>
                    <div class="pl-3">
                        <div class="font-medium">
                            Jean Marc
                        </div>
                        <div class="text-gray-600 text-sm">
                            CTO of Supercars
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    
</div>

    )
}
export default AtelierCard;