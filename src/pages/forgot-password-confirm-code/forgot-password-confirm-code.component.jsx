import "./forgot-password-confirm-code.styles.scss";
import {useNavigate} from "react-router-dom";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import {useState} from "react";
import axios from "axios";

const ForgotPasswordCode = () =>{

	const navigate = useNavigate();

	const [newPassword, setNewPassword] = useState()

	const handleForgotCodeBack =(event) =>{
		navigate("/forgot-password/confirm-email");
	}

	const handlePasswordResetChange = (event) => {
		setNewPassword(event.target.value);
	}

	const onPasswordCodeSubmit = (event) =>{
		event.preventDefault();

		axios.post("https://unisach-dev.onrender.com/api/users/auth/passwordreset/:resetToken",{
			password: newPassword
		})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err.response.data.message);
		})

		// navigate("/signin");
	}


	return(
		<div className="forgot-passwordcode">
			<UnisachLogo/>
			<div className="forgot-passwordcode__background">
				<form onSubmit={(event) => onPasswordCodeSubmit(event)} className="forgot-passwordcode__ash">
					<h1 className="forgot-passwordcode__h1">Enter otp</h1>
					<p className="forgot-passwordcode__p">Type or paste the code sent to your Email</p>
					<p className="forgot-passwordcode__p">(N************bx@ng.com)</p>
					<input onChange={(event) => handlePasswordResetChange(event)} className="forgot-passwordcode__input" type="password"/>
					<span className="forgot-passwordcode__span">Resend code</span>
					<div className="forgot-passwordcode__button-holder">
						<button className="forgot-passwordcode__button" onClick={(event) => handleForgotCodeBack(event)}>Back</button>
						<button className="forgot-passwordcode__button" type="submit">submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ForgotPasswordCode;