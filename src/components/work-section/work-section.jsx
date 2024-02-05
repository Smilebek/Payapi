
import Btn from "../second-button/second-btn"
import Tesla from "../../assets/svg/tesla.svg"
import Microsoft from "../../assets/svg/microsoft.svg"
import Hp from "../../assets/svg/hp.svg"
import Oracle from "../../assets/svg/oracle.svg"
import Google from "../../assets/svg/google.svg"
import Nvidia from "../../assets/svg/nvidia.svg"
import "./work-section.scss"

function Work() {
    return (
        <div className="work-section">
            <div className="container">
                <div className="work-section-box">
                    <div className="work-box">
                        <h2>Who we work with</h2>
                        <p>
                            Today, millions of people around the world have successfully connected their
                            accounts to apps they love using our API. We provide developers with the tools
                            they need to create easy and accessible experiences for their users.
                        </p>
                        <Btn btn={"About us"} />
                    </div>
                    <div className="work-section_right">
                        <ul>
                            <li>
                                <img src={Tesla} alt="" />
                            </li>
                            <li>
                                <img src={Microsoft} alt="" />
                            </li>
                            <li>
                                <img src={Hp} alt="" />
                            </li>
                            <li>
                                <img src={Oracle} alt="" />
                            </li>
                            <li>
                                <img src={Google} alt="" />
                            </li>
                            <li>
                                <img src={Nvidia} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work