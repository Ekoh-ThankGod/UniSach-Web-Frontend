import {useState} from "react";
import "./signup.styles.scss";
import ProfileAddress from "../../components/profileaddress/profile-address.component.jsx";

const SignUpPage = () =>{

	const createAccountDetails = {firstName: "", lastName:"", email: "", phone:"", password:"", confirmPassword:""};

	const inputDetails = [
		{id:"qwe", name: "firstName", placeholder: "First Name", className: "signup-container__common", value:""}, 
		{id:"asr", name: "lastName", placeholder:"last Name", className: "", value:""},
		{id:"gft", name:"email",placeholder:"Email", className:"signup-container__common", value:""},
		{id:"kgy", name: "phone", placeholder:"Phone Number",className:"", value:""},
		{id:"csr", name: "password", placeholder: "Password", className:"signup-container__common", value:""},
		{id:"tyu", name:"confirmPassword", placeholder:"Confirm Password", className:"", value:""}
		];
	const [createAccountDetailsValues, setCreateAccountDetails] = useState(createAccountDetails);
	const [inputDetailsValues, setInputDetailValues] = useState(inputDetails);
	const [heading, setHeading] = useState("Please Enter Details to Register");
	const [classDisplay, setClassDisplay] = useState("");
	const [classDisplayAddress, setClassDisplayAddress] = useState("profile-address__display");

	// Handles the changes in the input
	const onInputChange = (event) =>{
		const {name, value} = event.target;

		setCreateAccountDetails({
			...createAccountDetailsValues,
			[name]:value,
		})

		const newaccountdetails = inputDetailsValues.map(el =>{
			if(el.name ===  name){el.value = value}
				return el;
		})

		setInputDetailValues(newaccountdetails);
	}
	// console.log(createAccountDetailsValues);
	// handles the clicking of the button on register page
	const onButtonClick = (event) =>{
		const placeholders = [{id:"qwe", name: "Pharmacy Name"}, {id:"asr",name: "Pharmacy Type"}, {id:"gft", name: "Pharmacy Email"}, 
							{id:"kgy",name: "Pharmacy Phone No"}, {id:"csr", name: "Pharmacy Motto"}, {id:"tyu", name:"Pharmacy License No"}]
		const inputFields = inputDetailsValues.map(el =>{
			placeholders.map(pl =>{
				if(el.id === pl.id){
					el.placeholder = pl.name;
					el.value =""
				}
				return(
					el
				)
			})
			return(
				el
			)
		})
		setInputDetailValues(inputFields);
		setHeading("Register Pharmacy");
		setClassDisplay("signup-container__display");
		setClassDisplayAddress("");
		// console.log(inputDetailsValues);
	}

	return(
		<div className="signup-container">
			<h2 className="signup-container__text">{heading}</h2>
			<div className="signup-container__margin">
				<span className={`signup-container__span ${classDisplay}`}>Create an Account</span>
				<ProfileAddress classDisplayAddress={classDisplayAddress}/>
				<div className="signup-container__account">
					{
						inputDetailsValues.map(el =>{
							const {id, name, placeholder, className, value} = el;
							return(
								<input key={id} onChange={(event) => onInputChange(event)}  type="text" className={`signup-container__input ${className}`}
								name={name} placeholder={placeholder} value={value}/>
							)
						})
					}
					<div className="signup-container__buttonholder">
						<button onClick = {(event) => onButtonClick(event)} className="signup-container__button">Continue</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage;