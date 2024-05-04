import './FeaturedSection.css'
import img1 from '../assests/SVG2.png'
import img2 from '../assests/SVG1.svg'
import img3 from '../assests/img3.png'
import img4 from '../assests/img4.png'

const FeaturedSection = () => {
    return (
        <div className="background">
            <div className="container123">
            <b className="heading-2">Featured News</b>
                <div className="link">
                    <b className="more-nasa-news">More NASA News</b>
                    <img className="featured-svg-icon" alt="" src={img1} />
                </div>
                <div className="container1">
                    <div className="link1">
                        <img className="figure-starlinerjpg" alt="" src="Figure → starliner.jpg.png" />
                        <div className="background1">
                            <img className="svg-icon1" alt="" src={img1} />
                            <div className="news-release">News Release</div>
                            <div className="min-read">8 Min Read</div>
                            <b className="nasa-sets-coverage-container">
                            <span className="nasa-sets-coverage-container1">
                            <p className="nasa-sets-coverage">NASA Sets Coverage for Boeing Starliner’s First Crewed</p>
                            <p className="nasa-sets-coverage">Launch, Docking</p>
                            </span>
                            </b>
                        </div>
                    </div>
                    <div className="container2">
                    <div className="link2">
                        <img className="figure-52308729689-a0449d5ce" alt="" src={img3} />
                        <div className="background2">
                            <img className="svg-icon1" alt="" src={img2} />
                            <div className="news-release">News Release</div>
                            <div className="min-read1">5 Min Read</div>
                            <b className="former-nasa-center-container">
                            <span className="nasa-sets-coverage-container1">
                            <p className="nasa-sets-coverage">Former NASA Center</p>
                            <p className="nasa-sets-coverage">Director, Scientist to</p>
                            <p className="nasa-sets-coverage">Receive Presidential</p>
                            <p className="nasa-sets-coverage">Medals</p>
                            </span>
                        </b>
                    </div>
                </div>
                <div className="container3">
                    <div className="link3">
                        <img className="figure-wff-2024-021-484jpg" alt="" src={img4}/>
                        <div className="background3">
                            <img className="svg-icon3" alt="" src="SVG.svg" />
                            <div className="article">Article</div>
                            <div className="min-read2">3 Min Read</div>
                                <b className="researchers-develop-founding-container">
                                <span className="nasa-sets-coverage-container1">
                                <p className="nasa-sets-coverage">Researchers Develop</p>
                                <p className="nasa-sets-coverage">‘Founding Document’ on</p>
                                <p className="nasa-sets-coverage">Synthetic Cell</p>
                                <p className="nasa-sets-coverage">Development</p>
                                </span>
                            </b>
                            </div>
                        </div>
                        <div className="link4">
                            <img className="figure-wff-2024-021-484jpg" alt="" src="Figure → wff-2024-021-484.jpg.png" />
                            <div className="background3">
                                <img className="svg-icon3" alt="" src="SVG.svg" />
                                <div className="article">Article</div>
                                <div className="min-read2">4 Min Read</div>
                                <b className="hi-c-rocket-experiment-container">
                                <span className="nasa-sets-coverage-container1">
                                <p className="nasa-sets-coverage">Hi-C Rocket Experiment</p>
                                <p className="nasa-sets-coverage">Achieves Never-Before-</p>
                                <p className="nasa-sets-coverage">Seen Look at Solar</p>
                                <p className="nasa-sets-coverage">Flares</p>
                                </span>
                                </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="link5">
                    <img className="background-icon" alt="" src="Background.png" />
                    <div className="min-read4">5 Min Read</div>
                    <b className="nasa-is-helping-container">
                    <span className="nasa-sets-coverage-container1">
                    <p className="nasa-sets-coverage">NASA Is Helping Protect</p>
                    <p className="nasa-sets-coverage">Tigers, Jaguars, and</p>
                    <p className="nasa-sets-coverage">Elephants. Here’s How.</p>
                    </span>
                    </b>
                    <img className="svg-icon5" alt="" src="SVG.svg" />
                    <div className="article2">Article</div>
                    </div>
                    <div className="link6">
                    <img className="background-icon" alt="" src="Background.png" />
                    <div className="min-read4">2 Min Read</div>
                    <b className="nasa-technology-grants-container">
                    <span className="nasa-sets-coverage-container1">
                    <p className="nasa-sets-coverage">NASA Technology Grants to</p>
                    <p className="nasa-sets-coverage">Advance Moon to Mars Space</p>
                    <p className="nasa-sets-coverage">Exploration</p>
                    </span>
                    </b>
                    <img className="svg-icon5" alt="" src="SVG.svg" />
                    <div className="news-release2">News Release</div>
                    </div>
                    <div className="link7">
                    <img className="background-icon2" alt="" src="Background.png" />
                    <div className="min-read6">5 Min Read</div>
                    <b className="whats-up-may-container">
                    <span className="nasa-sets-coverage-container1">
                    <p className="nasa-sets-coverage">What’s Up: May 2024</p>
                    <p className="nasa-sets-coverage">Skywatching Tips from NASA</p>
                    </span>
                    </b>
                    <img className="svg-icon7" alt="" src="SVG.svg" />
                    <div className="article3">Article</div>
                    </div>
                    <div className="link8">
                    <img className="background-icon" alt="" src="Background.png" />
                    <div className="min-read7">18 Min Read</div>
                    <b className="asian-american-and-native-container">
                    <span className="nasa-sets-coverage-container1">
                    <p className="nasa-sets-coverage">Asian-American and Native</p>
                    <p className="nasa-sets-coverage">Hawaiian Pacific Islander</p>
                    <p className="nasa-sets-coverage">Heritage Month</p>
                    </span>
                    </b>
                    <img className="svg-icon5" alt="" src="SVG.svg" />
                    <div className="article2">Article</div>
                </div>
            </div>
        </div>
</div>
    )
}

export default FeaturedSection;