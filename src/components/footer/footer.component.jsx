import logoSmall from "../../assets/logo/logo-small.svg";
import "./footer.styles.scss";
const Footer = () =>{
	return(
		<div className="footer-container">
			<select className="footer-container__select">
				<option className="footer-container__option">English(Nigeria)</option>
				<option className="footer-container__option">English(British)</option>
			</select>
			<div className="pharmacy-logosmall">
				<img src={logoSmall} alt="pharmacy logo" className="pharmacy-logosmall__img"/>
				<span className="pharmacy-logosmall__text pharmacy-date__span">DevStrike</span>
			</div>
			<div className="pharmacy-date">
				<span className="pharmacy-date__span">&#169;2022</span>
			</div>
		</div>
	)
}

export default Footer;