import './App.css';

function Footer() {
    return(
        <div>
            <footer className="site-footer">
               <div className="container">
                  <div className="row">
                    <div className="col-md-8 subscribe-box">
                        <form action="#" className="subscribe-form">
                            <input type="text" placeholder="Enter your email..." required/>
                            <input type="submit" className='button-subscribe' value="Subscribe" required/>
                        </form>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <div className="social-links site-footer">
                            <a  target="_blank"><i className="fa fa-globe"></i></a>
                            <a target="_blank"><i className="fa fa-facebook"></i></a>
                            <a target="_blank"><i className="fa fa-instagram"></i></a>
                            <a target="_blank" ><i className="fa fa-twitter"></i></a>
                            <a target="_blank" ><i className="fa fa-github"></i></a>
                            <a target="_blank" ><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
               </div>
                <p className="colophon">WeatherCover by Nishi Sharma</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer