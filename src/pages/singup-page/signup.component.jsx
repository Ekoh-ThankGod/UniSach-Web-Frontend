import {useState} from "react";
import "./signup.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUpPage = ({email, setEmail, setLoader}) =>{	
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [phone, setPhone] = useState("");

	const [signUpError, setSignUpError] = useState("sign up error");
	const [displaySignUpError, setDisplaySignUpError] = useState("signup-container__error-display");
 
	const inputParameters = [{id: 1, type:"text", className:"signup-container__input-margin", name: "first Name", placeholder:"First Name"},
		{id: 2, type:"text", className:"", name: "last Name", placeholder:"Last Name"},
		{id: 3, type:"email", className:"signup-container__input-margin", name: "email", placeholder:"Email"},
		{id: 4, type:"tel", className:"", name: "phone number", placeholder:"Phone Number"},
		{id: 5, type:"password", className:"signup-container__input-margin", name: "password", placeholder:"Password"},
		{id: 6, type:"password", className:"", name: "confirmPassword", placeholder: "Confirm Password"}];

	// Validating the Email address

	const validateEmail = (mail) =>{
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// eslint-disable-line
		if(mail.match(mailformat)){
			return true;
		}
		else{
			return false;
		}
	}

	const onInputChange = (event) =>{
		const {name, value} = event.target;
		if(name === "first Name"){
			setFirstName(value);
		}else if(name === "last Name"){
			setLastName(value);
		}else if(name === "email"){
			setEmail(value)
		}else if(name === "phone number"){
			setPhone(value)
		}else if(name === "password"){
			setPassword(value)
		}else if(name === "confirmPassword"){
			setConfirmPassword(value)
		}
	}

	const handleSignUpError =(errorMessage) => {
		setDisplaySignUpError("");
		setSignUpError(errorMessage);
	}
	
	// handles the clicking of the button on register page
	const onSignUpButtonSubmit = (event) =>{
		event.preventDefault();

		if(firstName === "" || lastName === "" || password === "" || confirmPassword === "" || email === "" || phone === ""){
			handleSignUpError("please fill all inpput fields");
			return;
		}

		if(!validateEmail(email)){
			handleSignUpError("invalid email address");
			return;
		}

		if(password !== confirmPassword){
			handleSignUpError("passwords do not match");
			console.log("Equal");
			return;
		}

		if(password.length < 8){
			handleSignUpError("passwords must be up to 8 characters");
			return;
		}
		
		setDisplaySignUpError("signup-container__error-display");

		setLoader(true);

		axios.post("https://unisach-dev.onrender.com/api/users/auth/signup",{
				first_name: firstName,
			 	last_name: lastName,
			 	password: password,
			 	email: email,
			 	phone: phone,
			 	role: "Pharmacist"
				})
			.then(response => {
				if(response.data.data){
					navigate("/signup/token")
					setLoader(false);
				}
			})
			.catch(err => {
				setLoader(false);
				if(err.response.data.message){
					handleSignUpError(err.response.data.message);
				}
			});
		
	}

	return(
		<div className="signup-container">
			<UnisachLogo/>
			<div className="signup-container__background">
			<form onSubmit={(e) => onSignUpButtonSubmit(e)} className="signup-container__input-header">
				<h1 className="signup-container__header">Enter details to create account</h1>
				<div className="signup-container__inputholder">
				{
					inputParameters.map(el => {
						const {placeholder, name, id, className, type} = el;
						return(
							<input onChange={(event) =>onInputChange(event)} key={id} className={`signup-container__input ${className}`}
							 name={name} type={type} placeholder={placeholder}/>
						)
					})
				}
				</div>
				<button className="signup-container__button" type="submit">Continue</button>
				<span className={`signup-container__error ${displaySignUpError}`}>{signUpError}</span>
			</form>
			</div>
		</div>
	)
}

export default SignUpPage;