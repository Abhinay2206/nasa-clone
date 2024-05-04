import './MainPage.css'
import bg from '../assests/bg.webp'

const MainPage = () => {

    const handleClick = () => {
        window.location.href = '/another-page'; 
    };
    return (
        <div className="main-background">
            <div className="main-container">
            <div className="main-background1">
            <img className="figure-66149jpg" alt="" src={bg} />
            <div className="main-heading-2">
            <b className="a-deep-space-container">
            <span className="a-deep-space-container1">
            <p className="a-deep-space">A Deep Space</p>
            <p className="a-deep-space">Home</p>
            </span>
            </b>
        </div>
        <div className="main-container1">
            <div className="the-artemis-iv-container">
            <span className="a-deep-space-container1">
            <p className="a-deep-space">The Artemis IV mission is taking shape with major hardware for Gateway, humanity’s</p>
            <p className="a-deep-space">first space station to orbit the Moon.</p>
            </span>
            </div>
        </div>
        <div className="main-link">
            <b className="main-learn-more" onClick={handleClick}>Learn More</b>
        </div>
        <div className="main-container2">
            <div className="paragraphhorizontalborder" src={bg}>

                <div className="heading-3">ARTEMIS STUDENT CHALLENGE</div>
            <div className="link-human">Human Exploration Rover</div>
            </div>
            <div className="paragraphhorizontalborder1">
            <div className="heading-31">I AM ARTEMIS</div>
            <div className="link-people">People Behind the Missions</div>
            </div>
            <div className="paragraphhorizontalborder2">
                <div className="heading-32">THE ARTEMIS GENERATION</div>
                <div className="link-lunar">Lunar Exploration</div>
            </div>
            </div>
                
            <div className="gradient" />
            </div>
            </div>
            <img className="button-change-slide-to-nasa" alt="" src="Button - Change Slide to NASA’s Boeing Crew Flight Test.png" />
            <img className="button-change-slide-to-the-s" alt="" src="Button - Change Slide to The Search for Life.png" />
            <img className="button-change-slide-to-a-dee" alt="" src="Button - Change Slide to A Deep Space Home.png" />
            <div className="button" />
    </div>
    )
}

export default MainPage