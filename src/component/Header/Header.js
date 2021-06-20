import {Fragment} from "react";
import "./header.css"

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
