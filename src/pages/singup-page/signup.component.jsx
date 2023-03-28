import {useState} from "react";
import "./signup.styles.scss";
import ProfileAddress from "../../components/profileaddress/profile-address.component.jsx";
import AddImage from "../../components/add-image/add-image.component.jsx";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";

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

	const [count, setCount] =useState(1);
	const [createAccountDetailsValues, setCreateAccountDetails] = useState(createAccountDetails);
	const [inputDetailsValues, setInputDetailValues] = useState(inputDetails);
	// FOR CHANGING TEXT
	const [buttonText, setButtonText] = useState("Continue");
	// ERROR MESSAGE
	const [errorMessage, setErrorMessage] = useState("error message is displayed here");
	const [errorVisibility, setErrorVisibility] = useState("signup-container__circle-display");
	// FOR Changing CSS
	const [heading, setHeading] = useState("Enter details to create account");
	const [classDisplayAddress, setClassDisplayAddress] = useState("profile-address__display");
	// const [circleDisplay, setCircleDisplay] = useState("signup-container__circle-display");
	const [address, setAddress] = useState("");
	const [others, setOthers] = useState("");
	const [inputDisplay, setInputDisplay] = useState("");
	const [addImageDisplay, setAddImageDisplay] = useState("signup-container__display");


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

	// UPDATES THE INPUTDETAILVALUES
	const changePlaceHolder =(placeholders) =>{
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
	}

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
		setCount(1);
		setErrorMessage(message);
		setErrorVisibility("");
	}
	
	// handles the clicking of the button on register page
	const onButtonClick = (event) =>{
		let placeholders;
		setCount(count+1);

		const {password, confirmPassword, email,firstName, lastName, phone} = createAccountDetailsValues;

		if(password === "" || confirmPassword === "" || email === "" 
			|| lastName === "" || firstName=== ""|| phone === ""){
			handleErrorMessage("Please fill all the input fields!");
			return;
		}

		// Password Validation

		if(password !== confirmPassword || password===""){
			handleErrorMessage("Passwords do not match!");
			return;
		}

		if(password.length < 8){
			handleErrorMessage("Password must be atleast 8 characters!");
			return;
		}
		else{
			setErrorVisibility("signup-container__circle-display");
		}

		if(!validateEmail(email)){
			handleErrorMessage("Not a valid email address!");
			return;
		}

		if(count === 1){
			placeholders = [{id:"qwe", name: "Pharmacy Name"}, {id:"asr",name: "Pharmacy Type"}, {id:"gft", name: "Pharmacy Email"}, 
							{id:"kgy",name: "Pharmacy Phone No"}, {id:"csr", name: "Pharmacy Motto"}, {id:"tyu", name:"Pharmacy License No"}]

			changePlaceHolder(placeholders);
			setHeading("Pharmacy Registration");
			// setClassDisplay("signup-container__display");
			setClassDisplayAddress("");
		}
		else if(count === 2){
			placeholders = [{id:"qwe", name: "Line 1"}, {id:"asr",name: "Line 2"}, {id:"gft", name: "District"}, 
							{id:"kgy",name: "City"}, {id:"csr", name: "LGA"}, {id:"tyu", name:"State"}]

			changePlaceHolder(placeholders);

			setAddress("profile-address__common");
		}

		else if(count === 3){
			setOthers("profile-address__others");
			setInputDisplay("signup-container__display");
			setAddImageDisplay("");
			setHeading("");
			setButtonText("Finish");
		}
		else{
			console.log(count);
		}
		
	}

	return(
		<div className="signup-container">
			<UnisachLogo/>
			<div className="signup-container__overall">
			<div className="signup-container__margin">
				<ProfileAddress others={others} address={address} classDisplayAddress={classDisplayAddress}/>
				<h2 className="signup-container__header">{heading}</h2>
				<AddImage addImageDisplay={addImageDisplay}/>
				<div className="signup-container__account">
					{
						inputDetailsValues.map(el =>{
							const {id, name, placeholder, className, value} = el;
							return(
								<input key={id} onChange={(event) => onInputChange(event)}  type="text" className={`signup-container__input ${className} ${inputDisplay}`}
								name={name} placeholder={placeholder} value={value}/>
							)
						})
					}
					<div className="signup-container__buttonholder">
						<button onClick = {(event) => onButtonClick(event)} className="signup-container__button">{buttonText}</button>
						<span className={`signup-container__error ${errorVisibility}`}>{errorMessage}</span>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}

export default SignUpPage;