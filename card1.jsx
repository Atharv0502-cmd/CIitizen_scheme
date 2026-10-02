const Card = () => {
    return(
        <div>
            <div className="card-container">
                <h5>CATEGORIES</h5>
                <h1>Explore by Sector</h1>
                <p>Organized by key civic sectors and citizen demographics.</p>
                <div className="card">
                    <div className="photo">
                    <img width= "24px" height="20px" src="img/Container.png" alt=""/> <p>420 schemes</p>
                    </div>
                    <div className="cardname">
                        <h3>Agriculture</h3>
                        <img src="img/arrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;
