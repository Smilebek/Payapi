import "./bussines-section.scss";
import Finance from "../../assets/svg/finance.svg"
import CoverAge from "../../assets/svg/coverage.svg"
import Pay from "../../assets/svg/pay.svg"

function Bussines() {
    return (
        <div className="bussines-section">
            <div className="container">
                <div className="bussines-wrap">
                    <div className="bussines-box">
                        <ul>
                            <li>
                                <img src={Finance} alt="" />
                                <h4>Personal Finances</h4>
                                <p>
                                    Consolidate financial data from multiple
                                    sources and categorize transactions
                                    up to 2 years of history. Analyze reports
                                    to reconcile activities in your account.
                                </p>
                            </li>
                            <li>
                                <img src={CoverAge} alt="" />
                                <h4>Banking & Coverage</h4>
                                <p>
                                    With our platform, you can speed up account
                                    onboarding and support ongoing payments
                                    for checking, savings, credit card, and
                                    brokerage accounts.
                                </p>
                            </li>
                            <li>
                                <img src={Pay} alt="" />
                                <h4>Consumer Payments</h4>
                                <p>
                                    It’s easier to set up secure bank payments
                                    with us through a flow designed with the user
                                    experience in mind. Customers could instantly
                                    authenticate their account.
                                    </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bussines