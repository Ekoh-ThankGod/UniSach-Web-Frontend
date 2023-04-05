import "./forgot-password-confirm-code.styles.scss";
import {useNavigate, useLocation} from "react-router-dom";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import {useState} from "react";
import axios from "axios";

const ForgotPasswordCode = ({email, setLoader, showNotificationError, showNotificationSuccess}) =>{

	const navigate = useNavigate();

	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const location = useLocation();

	const handleForgotCodeBack =(event) =>{
		navigate("/forgot-password/confirm-email");
	}

	const handlePasswordResetChange = (event) => {
		const {value, name} = event.target;
		if(name === "password"){
			setNewPassword(value);
		}
		else if(name === "confirm password"){
			setConfirmNewPassword(value);
		}
	}


	const onPasswordCodeSubmit = (event) =>{
		event.preventDefault();

		if(newPassword === "" || confirmNewPassword === ""){
			showNotificationError("please fill in your new password");
			return;
		}

		if(newPassword !== confirmNewPassword){
			showNotificationError("passwords do not match");
			return;
		}
		if(newPassword.length < 8){
			showNotificationError("password must be up to 8 characters");
			return;
		}

		setLoader(true);

		axios.post(`https://unisach-dev.onrender.com/api/users/auth/passwordreset/${location.pathname.split("/")[3]}`,{
			password: newPassword
		})
		.then(res => {
			showNotificationSuccess(res.data.data);
			navigate("/login");
			setLoader(false)
		})
		.catch(err => {
			showNotificationError(err.response.data.message);
			setLoader(false)
		})
	}


	return(
		<div className="forgot-passwordcode">
			<UnisachLogo/>
			<div className="forgot-passwordcode__background">
				<form onSubmit={(event) => onPasswordCodeSubmit(event)} className="forgot-passwordcode__ash">
					<h1 className="forgot-passwordcode__h1">Enter New Password</h1>
					<p className="forgot-passwordcode__p">the passwords must be the same</p>
					<input onChange={(event) => handlePasswordResetChange(event)} placeholder="new password" name="password"
					className="forgot-passwordcode__input forgot-passwordcode__input-margin" type="password"/>
					<input onChange={(event) => handlePasswordResetChange(event)} placeholder="confirm password" name="confirm password"
					 className="forgot-passwordcode__input" type="password"/>
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