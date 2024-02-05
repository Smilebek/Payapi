import "./footer.scss"
import FooterPayapi from "../../assets/svg/payapi.svg"
import Images from "../../assets/svg/images.svg"

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-left_box">
                        <img src={FooterPayapi} alt="payapi" />
                        <ul>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right_box">
                        <img src={Images} alt="hello" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer