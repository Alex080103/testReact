
const Tab = ({id, title, activeTab, setActiveTab}) => {
    const handleClick = () => {
        setActiveTab(id);
    };
    return (
        <div onClick={handleClick} className={`${ activeTab == id ? "bg-main-pink" : "bg-main-gray"} py-4 sm:py-8 cursor-pointer text-center`}>
            {title}
        </div>
    )
}

export default Tab;