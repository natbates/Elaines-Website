import "../styles/seemy.css";

const SeeStudies = () => {
    const handleButtonClick = () => {
        window.open("https://authory.com/ElaineKeep", "_blank", "noopener,noreferrer");
    };

    return (
        <section className="see-my">
            <div className="see-my-text">
                <p>See What I Can Do</p>
                <a href = "https://authory.com/ElaineKeep" target="_blank"><span className="pink-underline">See My Portfolio</span></a>
                <button onClick={handleButtonClick} className="findout-more-button">
                    Find out more
                </button>
            </div>
            <div id="polkadots"></div>
        </section>
    );
};

export default SeeStudies;
