const Hero = () => {
  return (
    <div>
      <div className="main">
        <div className="hero1">
          <div className="chip">
            <p>•</p>
            <h3>
              National Welfare Registry
              <span> | Direct Beneficiary Interface</span>
            </h3>
          </div>

          <div className="heading">
            <h1>
              Welfare programs, <span>simplified.</span>
            </h1>
          </div>

          <p>
            Discover verified Central and State entitlements, grants, and
            subsidies tailored specifically to you.
          </p>

          <div className="search">
              <img src="img/Icon (8).png" alt="" />
            <div className="location">
              <h3>All States <img src="img/down.svg" alt="" /></h3>
            </div>
            <p>|</p>
            <img src="img/search.svg" alt="" />
            <input
            placeholder=" Search by scheme name, sector, or keyword... "/>
          </div>
        </div>

        <div className="hero2">
          <div className="box1">
            <div className="chip1">SMART ASSIST</div>

            <h3>Eligibility Wizard</h3>

            <p>
              Answer 5 simple questions to see every program matched to your
              profile.
            </p>

            <button className="check">
              Check Eligibility
              <img src="img/Icon (7).png" alt="" />
            </button>
          </div>
        </div>

      </div>

      <div className="track">
        <img src="img/Overlay.png" alt="" />

        <div className="info">
          <h1>2,480+</h1>
          <p>Active Welfare Schemes</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;