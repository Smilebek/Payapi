import "./easy.scss";
import Codes from "../../assets/svg/codes.svg"

function Easy() {

    console.log(Codes);

    return (
        <div className="easy-section">
            <div className="container">
                <div className="easy-wrap">
                    <div className="left-box">
                        <img src={Codes} alt="code" />
                    </div>
                    <div className="right-box">
                        <h2>Easy to implement</h2>
                        <p>
                            Our API comes with just a few lines of code.
                            You’ll be up and running in no time. We built our documentation page to
                            integrate payments functionality with ease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Easy