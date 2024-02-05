import "./ready-section.scss";
import Button from "../button/button";

function Ready() {
    return (
        <div className="ready-section">
            <div className="container">
                <div className="ready-box">
                    <h2>Ready to start?</h2>
                    <form className=" ready-form">
                        <input className="ready-input" type="email" placeholder="Enter email address" />
                        <div className="ready-button_wrap">
                            <Button content="Schedule a Demo" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ready