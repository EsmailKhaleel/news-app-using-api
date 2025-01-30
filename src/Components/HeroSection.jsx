import NavBar from "./NavBar";
export default function HeroSection(props) {
    let cardsData = props.cardsData;
    return (
        <section id="hero-wrapper">
            <NavBar />
            {/* <div id="hero-section">
                <div id="card-1">
                        <img src={cardsData[0].urlToImage} alt={cardsData[0].title} className="hero-image"/>
                    <div key={'01$1'} className="hero-card-content">
                        <h3>{cardsData[0].author}</h3>
                        <p>{cardsData[0].title}</p>
                        <p>{cardsData[0].publishedAt.slice(0, 10)}</p>
                        <p>{cardsData[0].description}</p>
                    </div>

                </div>
                <div id="card-2">
                        <img src={cardsData[1].urlToImage} alt={cardsData[0].title} className="hero-image"/>

                    <div key={'01$2'} className="hero-card-content">
                        <h3>{cardsData[1].author}</h3>
                        <p>{cardsData[1].title}</p>
                        <p>{cardsData[1].publishedAt.slice(0, 10)}</p>
                        <p>{cardsData[1].description}</p>
                    </div>
                </div>
                <div id="card-3" >
                        <img src={cardsData[2].urlToImage} alt={cardsData[0].title} className="hero-image"/>

                    <div key={'01$3'} className="hero-card-content">
                        <h3>{cardsData[2].author}</h3>
                        <p>{cardsData[2].title}</p>
                        <p>{cardsData[2].publishedAt.slice(0, 10)}</p>
                        <p>{cardsData[2].description}</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
}