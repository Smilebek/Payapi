import "./header.scss"
import HeaderImg from "../../assets/svg/payap.svg"
import Button from "../button/button"
import { NavLink } from "react-router-dom"


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box_wrap">
                    <div className="header-left_box">
                        <img src={HeaderImg} alt="#" />
                        <ul>
                            <li>
                                <NavLink to={'/'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/price'}>
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="header-right_button">
                        <Button content="Schedule a Demo" />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header