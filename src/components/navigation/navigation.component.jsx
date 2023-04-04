import "./navigation.styles.scss";
import logo from "../../assets/logo/unisachlogo.png";
import {Link} from "react-router-dom";
const Navigation = () =>{
	return(
		<div className="navigation">
			<Link to="/" className="logo-container">
				<img src={logo} className="logo-container__logo" alt="pharmacy-logo"/>
				<span className="logo-container__text">Unisac</span>
			</Link>
			<div className="navigation-list">
				<ul className="navigation-list__container">
					<li className="navigation-list__item">Platform</li>
					<li className="navigation-list__item">Service</li>
					<li className="navigation-list__item">Work</li>
					<li className="navigation-list__item">About us</li>
					<li className="navigation-list__item">Contact</li>
				</ul>
			</div>
			<div className="login-signup">
				<div className="login-signup__container">
					<Link to="/login">
						<button className="login-signup__login login-signup__common">Login</button>
					</Link>	
					<Link to="/signup">
						<button className="login-signup__signup login-signup__common">Sign up</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navigation;