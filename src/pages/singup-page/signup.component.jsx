import {useState} from "react";
import "./signup.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUpPage = () =>{	
	const navigate = useNavigate();

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

	const handleErrorMessage = (message) =>{
		
	}
	
	// handles the clicking of the button on register page
	const onButtonClick = (event) =>{
		axios.post("https://unisach-dev.onrender.com/api/users/auth/signup",{
				first_name: "",
			 	last_name: "",
			 	password: "",
			 	email: "",
			 	phone: "",
			 	role: "Pharmacist"
				})
			.then(response => {
				if(response.data.data){
					navigate("/signup/token")
				}
			})
			.catch(err => console.log(err.response.data.message));
		
	}

	return(
		<div className="signup-container">
			<UnisachLogo/>
			<div className="signup-container__background">
			<div className="signup-container__input-header">
				<h1 className="signup-container__header">Enter details to create account</h1>
				<div className="signup-container__inputholder">
				{
					inputParameters.map(el => {
						const {placeholder, name, id, className} = el;
						return(
							<input key={id} className={`signup-container__input ${className}`} name={name} placeholder={placeholder}/>
						)
					})
				}
				</div>
				<button className="signup-container__button" onSubmit={(event) => onButtonClick(event)}>Continue</button>
			</div>
			</div>
		</div>
	)
}

export default SignUpPage;