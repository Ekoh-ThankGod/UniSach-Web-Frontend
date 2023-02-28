import "./navigation.styles.scss";
import logo from "../../assets/logo/logo.svg";
const Navigation = () =>{
	return(
		<div className="navigation">
			<div className="logo-container">
				<img src={logo} className="logo-container__logo" alt="pharmacy-logo"/>
				<span className="logo-container__text">Unisac</span>
			</div>
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
					<button className="login-signup__login login-signup__common">Login</button>
					<button className="login-signup__signup login-signup__common">Sign up</button>
				</div>
			</div>
		</div>
	)
}

export default Navigation;