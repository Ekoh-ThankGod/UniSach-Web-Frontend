import "./forgot-confirmemail.styles.scss";
import {useNavigate} from "react-router-dom";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import {useState} from "react";
import axios from "axios";

const ForgotConfirmEmail =() =>{

	const [emailReset, setEmailReset] = useState("");


	const handleEmailInputChange = (event) =>{
		setEmailReset(event.target.value)
	}


	const handleEmailInputChangeSubmit =(event) =>{
		event.preventDefault();

		axios.post("https://unisach-dev.onrender.com/api/users/auth/forgotpassword",{
			email: emailReset
		})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err.response.data.message)
		})

	}

	return(
		<div className="forgot-confirmemail">
			<UnisachLogo/>
			<div className="forgot-confirmemail__background">
				<form onSubmit={(event) => handleEmailInputChangeSubmit(event)} className="forgot-confirmemail__ash">
					<h1 className="forgot-confirmemail__h1">Confirm your Email</h1>
					<p className="forgot-confirmemail__p">cleverekoh@gmail.com</p>
					<input onChange={(event) => handleEmailInputChange(event)} className="forgot-confirmemail__input" type="email"/>
					<button className="forgot-confirmemail__button" type="submit">Get Code</button>
				</form>
			</div>
		</div>
	)
}

export default ForgotConfirmEmail;
