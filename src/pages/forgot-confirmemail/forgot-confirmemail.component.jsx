import "./forgot-confirmemail.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import axios from "axios";

const ForgotConfirmEmail =({setEmail, email, setLoader}) =>{


	const handleEmailInputChange = (event) =>{
		setEmail(event.target.value);
	}


	const handleEmailInputChangeSubmit =(event) =>{
		event.preventDefault();

		setLoader(true);

		axios.post("https://unisach-dev.onrender.com/api/users/auth/forgotpassword",{
			email: email
		})
		.then(res => {
			console.log(res.data.data);
			setLoader(false)
		})
		.catch(err => {
			console.log(err.response.data.message);
			setLoader(false)
		})

	}

	return(
		<div className="forgot-confirmemail">
			<UnisachLogo/>
			<div className="forgot-confirmemail__background">
				<form onSubmit={(event) => handleEmailInputChangeSubmit(event)} className="forgot-confirmemail__ash">
					<h1 className="forgot-confirmemail__h1">Confirm your Email</h1>
					<p className="forgot-confirmemail__p">eg. johndoe@gmail.com</p>
					<input onChange={(event) => handleEmailInputChange(event)} className="forgot-confirmemail__input" type="email"/>
					<button className="forgot-confirmemail__button" type="submit">Get Code</button>
				</form>
			</div>
		</div>
	)
}

export default ForgotConfirmEmail;
