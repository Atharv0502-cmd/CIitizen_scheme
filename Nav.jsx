const Navigation = () => {
    return(
         <div className="nav">
          <img class="logo" src="/img/Citizen.png" alt="CitizenSchemes" />

          <div className="otption">

            <ul>

              <li data-page="index.html">
                <img src="img/Icon (1).png" alt="Home" />
                <span>Home</span>
              </li>

              <li data-page="find-schemes.html">
                <img src="img/Icon (2).png" alt="Find Schemes" />
                <span>Find Schemes</span>
              </li>

              <li data-page="all-schemes.html">
                <img src="img/Icon (3).png" alt="All Schemes" />
                <span>All Schemes</span>
              </li>

              <li data-page="track-status.html">
                <img src="img/Icon (4).png" alt="Track Status" />
                <span>Track Status</span>
              </li>

              <li data-page="help.html">
                <img src="img/Icon (5).png" alt="Help" />
                <span>Help</span>
              </li>

            </ul>

          </div>

          <div className="help-number">
            <img height="18px" src="img/Icon (6).png" alt="" />
            <p>1800-11-0022</p>
          </div>
          <div id="loginbtn" className="button">
            <button>Login / Sign In</button>
          </div>
        </div>
    )
}

export default Navigation;