import "./forgot-password.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import direction from "../../assets/logo/direction.png";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () =>{

	const navigate = useNavigate();

	const handleBackClick =(event) =>{
		navigate("/signin")
	}

	const handleNextClick = (event)  =>{
		navigate("/forgot-password/confirm-email")
	}

	return(
		<div className="forgot-password__holder">
			<UnisachLogo/>
			<div className="forgot-password__background">
				<div className="forgot-password__ash">
					<h1 className="forgot-password__h1">How to recover your account</h1>
					<div className="forgot-password__img-paragraph">
						<img src={direction} alt="direction" className="forgot-password__img"/>
						<div className="forgot-password__paragraph-holder">
							<p className="forgot-password__paragraph">Confirm your Email</p>
							<p className="forgot-password__paragraph">Provide otp</p>
							<p className="forgot-password__paragraph">Account password recovered</p>
						</div>
					</div>
					<div className="forgot-password__button-holder">
						<button className="forgot-password__button" onClick={(event) =>handleBackClick(event)}>Back</button>
						<button className="forgot-password__button" onClick={(event) =>handleNextClick(event)}>Next</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword;