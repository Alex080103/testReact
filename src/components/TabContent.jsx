
const TabContent = ({id, activeTab, children}) => {
    return (
        <section className={`mb-16 ${id == activeTab ? "" : "hidden"}`}>
            { children }
        </section>
    )
};

export default TabContent;