import {useState} from "react";
import "./signup.styles.scss";
import ProfileAddress from "../../components/profileaddress/profile-address.component.jsx";
import AddImage from "../../components/add-image/add-image.component.jsx";

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
	const [heading, setHeading] = useState("Please Enter Details to Register");
	const [buttonText, setButtonText] = useState("Continue");
	// ERROR MESSAGE
	const [errorMessage, setErrorMessage] = useState("error message is displayed here");
	const [errorVisibility, setErrorVisibility] = useState("signup-container__circle-display");
	// FOR Changing CSS
	const [classDisplay, setClassDisplay] = useState("");
	const [classDisplayAddress, setClassDisplayAddress] = useState("profile-address__display");
	const [circleDisplay, setCircleDisplay] = useState("signup-container__circle-display");
	const [address, setAddress] = useState("");
	const [others, setOthers] = useState("");
	const [circleBig, setCircleBig] = useState("");
	const [circleBig1, setCircleBig1] = useState("");
	const [circleBig2, setCircleBig2] = useState("");
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

			setHeading("Register Pharmacy");
			setClassDisplay("signup-container__display");
			setClassDisplayAddress("");
			setCircleDisplay("");
			setCircleBig("signup-container__circle-big");
		}
		else if(count === 2){
			placeholders = [{id:"qwe", name: "Line 1"}, {id:"asr",name: "Line 2"}, {id:"gft", name: "District"}, 
							{id:"kgy",name: "City"}, {id:"csr", name: "LGA"}, {id:"tyu", name:"State"}]

			changePlaceHolder(placeholders);

			setAddress("profile-address__common");
			setCircleBig1("signup-container__circle-big");
			setCircleBig("");
		}

		else if(count === 3){
			setOthers("profile-address__others");
			setCircleBig2("signup-container__circle-big");
			setCircleBig1("");
			setInputDisplay("signup-container__display");
			setAddImageDisplay("");
			setButtonText("Finish");
		}
		else{
			console.log(count);
		}
		
	}

	return(
		<div className="signup-container">
			<h2 className="signup-container__text">{heading}</h2>
			<div className="signup-container__margin">
				<span className={`signup-container__span ${classDisplay}`}>Create an Account</span>
				<ProfileAddress others={others} address={address} classDisplayAddress={classDisplayAddress}/>
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
						<div className={`signup-container__small ${circleDisplay}`}>
							<span className={`signup-container__circle ${circleBig}`}></span>
							<span className={`signup-container__circle ${circleBig1}`}></span>
							<span className={`signup-container__circle ${circleBig2}`}></span>
						</div>
						<button onClick = {(event) => onButtonClick(event)} className="signup-container__button">{buttonText}</button>
					</div>
					<span className={`signup-container__error ${errorVisibility}`}>{errorMessage}</span>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage;