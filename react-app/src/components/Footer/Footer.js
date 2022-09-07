import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div>Enjoying the website? So impressed you want to hire the engineer immediately? Here's all the info you need for that!</div>
            <div className="personal-links">
                <a href='https://www.linkedin.com/in/thomasanton1224/' target="_blank" >LinkedIn</a>
                <a href='https://github.com/tanton1224' target="_blank" >Github</a>
                <a href='mailto:thomasanton1224@gmail.com' target="_blank" >Email</a>
            </div>
        </div>
    )
}

export default Footer;
