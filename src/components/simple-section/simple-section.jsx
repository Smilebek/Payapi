import "./simple-section.scss";
import TwoPhones from "../../assets/svg/two-phones.svg"

function Simple() {
    return (
        <div className="simple-section">
            <div className="container">
                <div className="simple-wrap">
                    <div className="simple-wrap_left">
                        <h2>Simple UI & UX</h2>
                        <p>
                            Our pre-built form is easy to integrate in your app or website’s
                            checkout flow and designed to optimize conversion.
                        </p>
                    </div>
                    <div className="simple-wrap_right">
                        <img src={TwoPhones} alt="phone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simple