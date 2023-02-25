import './App.css';

export default function Header() {
    return(
        <div>
          <div className="site-header">
            <div className="container">
            <a className="branding">
                <img src="" alt="" className="logo"/>
                <div className="logo-type">
                <h1 className="site-title">WeatherCover</h1>
                <small className="site-description">Real time weather forecast</small>
                </div>
            </a>

            <div className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                <li className="menu-item current-menu-item" id="omar"><a>Home</a></li>

                </ul>
            </div> 

            <div className="mobile-navigation"></div>

            </div>
          </div> 
        </div>
    )
}