import "./building-section.scss"
import Button from "../button/button"
import HeroSectionImg from "../../assets/img/phone.png"

function Building() {
    return (
        <div className="building-section">
            <div className="container">
                <div className="building-section_wrap">
                    <div className="just-div">
                        <h2 className="hero-title">Start building with our APIs for absolutely free.</h2>
                        <form className="form">
                            <input className="input" type="email" placeholder="Enter email address" />
                            <div className="button-wrap">
                                <Button content="Schedule a Demo" />
                            </div>
                        </form>
                    </div>
                    <div className="just">
                        <img src={HeroSectionImg} alt="hello" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Building