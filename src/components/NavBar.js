import './NavBar.css'
import nasaLogo from '../assests/nasa-logo.png'
import downArrow from '../assests/down-arrow.png'
import circleDownArrow from '../assests/down-arrow-circle.png'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="list-item-button">
                    <div className="explore">Explore</div>
                    <img className="svg-icon" alt="" src={circleDownArrow} />
                 </div>
                <div className="search">
                    <div className="input">
                        <div className="container1">
                            <div className="navbar-search1">Search...</div>
                        </div>
                    </div>
                    <div className="navbar-label-search">Search</div>
                </div>
                    <img className="link-nasa-logosvg" alt="" src={nasaLogo} />
                        <div className="nav-primary-navigation-lis">
                            <div className="item-button">
                                <div className="news-events">{`News & Events`}</div>
                            <img className="svg-icon1" alt="" src={downArrow} />
                        </div>
                        <div className="item-button1">
                            <div className="multimedia">Multimedia</div>
                            <img className="svg-icon2" alt="" src={downArrow} />
                        </div>
                        <div className="item-link">
                        <div className="nasa">NASA+</div>
                        <div className="border">
                            <div className="live">Live</div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default NavBar;
