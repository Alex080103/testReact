import { useEffect, useState } from "react";

const Pagination = ({setLimit, setOffset, datas, limit, offset, totalDatas}) => {

    useEffect(() => {
        countPages();
    }, [datas])
    const  [totalPages, setTotalPages] = useState([]);
    const [current, setCurrent] = useState(0);

    function countPages() {
        let count = totalDatas / limit;
        let newCurrent = limit/5 -1;
        setCurrent(newCurrent);
        console.log(current, limit, newCurrent);
        count = Math.ceil(count);

        let newTotalPages = [];
        for ( let i = 0; i < count; i++) {
            newTotalPages.push(i);
        }
        setTotalPages([...newTotalPages]) ;
    }

    function handleClick() {
        setLimit(limit + limit);
        setOffset(offset + offset);
    }
    return (
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 ">
                Showing
                <span className="font-semibold text-gray-900"> {offset}-{limit} </span>
                of
                <span className="font-semibold text-gray-900"> {datas.length}</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
                {   totalPages.length !== 0 ?
                     totalPages.map((page, index) => {
                        return (
                            <li>
                                <button onClick={() => handleClick(index)} key={index+1}  aria-current="page" 
                                className={`flex items-center justify-center text-sm z-10 py-2 px-3 text-primary-600
                                 ${ index == current ? "bg-gray-500" : "bg-primary-50" }  border border-primary-300 hover:bg-primary-100 hover:text-primary-700 `}>{index+1}
                                 </button>
                            </li>
                    )
                    }) : null
                }
                

                <li>
                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;