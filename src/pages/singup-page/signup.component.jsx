import {useState} from "react";
import "./signup.styles.scss";

const SignUpPage = () =>{

	const createAccountDetails = {firstName: "", lastName:"", email: "", phone:"", password:"", confirmPassword:""};
	const [createAccountDetailsValues, setCreateAccountDetails] = useState(createAccountDetails);

	const onInputChange = (event) =>{
		const {name, value} = event.target;

		setCreateAccountDetails({
			...createAccountDetailsValues,
			[name]:value,
		})
	}
	// console.log(createAccountDetailsValues);

	const onButtonClick = (event) =>{
		console.log(event.target);
	}

	return(
		<div className="signup-container">
			<h2 className="signup-container__text">Please Enter Details to Register</h2>
			<div className="signup-container__margin">
				<span className="signup-container__span">Create an Account</span>
				<div className="signup-container__account">
					<input onChange={(event) => onInputChange(event)}  type="text" className="signup-container__input signup-container__common"
					 name="firstName" placeholder="First Name"/>
					<input onChange={(event) => onInputChange(event)}  type="text" className="signup-container__input"
					 name="lastName" placeholder="Last Name"/>
					<input onChange={(event) => onInputChange(event)} type="text" className="signup-container__input signup-container__common"
					 name="email" placeholder="Email"/>
					<input onChange={(event) => onInputChange(event)} type="tel" className="signup-container__input"
					 name="phone" placeholder="Phone Number"/>
					<input onChange={(event) => onInputChange(event)} type="password" 
					className="signup-container__input signup-container__common"
					 name="password" placeholder="Password "/>
					<input onChange={(event) => onInputChange(event)} type="password" 
					className="signup-container__input" name="confirmPassword" placeholder="Confirm Password"/>
					<div className="signup-container__buttonholder">
						<button onClick = {(event) => onButtonClick(event)} className="signup-container__button">Continue</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage;