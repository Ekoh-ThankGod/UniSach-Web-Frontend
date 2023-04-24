import "./pharmacy-registration.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import {useState} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.js";

const PharmacyRegistration = ({setLoader, showNotificationError, showNotificationSuccess}) => {

const registerPharmacy = [{id: 1, name:"pharmacy name", type:"text", placeholder:"Pharmacy Name", className:"pharmacy-registration__margin"},
	{id: 2, name:"Pharmacy Type", type:"text", placeholder:"Pharmacy Type", className:""},
	{id: 3, name:"Pharmacy Email", type:"email", placeholder:"Pharmacy Email", className:"pharmacy-registration__margin"},
	{id: 4, name:"Pharmacy Phone", type:"tel", placeholder:"Pharmacy Phone", className:""},
	{id: 5, name:"Pharmacy Moto", type:"text", placeholder:"Pharmacy Moto", className:"pharmacy-registration__margin"},
	{id: 6, name:"Pharmacy License No.", type:"text", placeholder:"Pharmacy License No.", className:""}
	];

const [pharmacyName, setPharmacyName] = useState();
const [pharmacyEmail, setPharmacyEmail] = useState();
const [pharmacyPhone, setPharmacyPhone] = useState();
const [pharmacyLicenseNo, setPharmacyLicenseNo] = useState();
const [pharmacyType, setPharmacyType] = useState();
const [pharmacyMoto, setPharmacyMoto] = useState();

const axiosPrivate = useAxiosPrivate();

const onPharmacyInputChange = (e) => {
	const {value} = e.target;
	if(e.target.name === "pharmacy name"){
		setPharmacyName(value)
	}else if(e.target.name === "Pharmacy Type"){
		setPharmacyType(value)
	}else if(e.target.name === "Pharmacy Email"){
		setPharmacyEmail(value)
	}else if(e.target.name === "Pharmacy Phone"){
		setPharmacyPhone(value)
	}else if(e.target.name === "Pharmacy Moto"){
		setPharmacyMoto(value)
	}else if(e.target.name === "Pharmacy License No."){
		setPharmacyLicenseNo(value)
	}
}

const registerPharmacySubmit = () =>{


	if(!pharmacyName || !pharmacyMoto || !pharmacyType || !pharmacyEmail
	 || !pharmacyPhone || !pharmacyLicenseNo){
		showNotificationError("no field should be empty");
		return;
	}

	setLoader(true);

	axiosPrivate.get("https://unisach-dev.onrender.com/api/pharmacies",{
		name: pharmacyName,
		type: pharmacyType,
		phone_number: pharmacyPhone,
		license_number: pharmacyLicenseNo,
		email: pharmacyEmail
	})
	.then(response=> {
		console.log(response.data);
		showNotificationSuccess("pharmacy registration successful")
		setLoader(false);
	})
	.catch(err=>{
		console.log(err);
		showNotificationError("failed to register pharmacy")
		setLoader(false);
	})
}
	return(
		<div className="pharmacy-registration">
			<UnisachLogo/>
			<div className="pharmacy-registration__background">
				<div className="pharmacy-registration__ash">
					<h1 className="pharmacy-registration__h1">Pharmacy Registration</h1>
					<div className="pharmacy-registration__inputs">
						{
							registerPharmacy.map(el =>{
								const {id, name, type, placeholder, className} = el;
								return(
									<div key={id} className="pharmcay-registration__input-container">
										<input onChange={(e) => onPharmacyInputChange(e)} name={name} type={type} placeholder={placeholder} className={`pharmacy-registration__input ${className}`}/>
									</div>
								)
							})
						}
					</div>
					<button onClick={registerPharmacySubmit} className="pharmacy-registration__button">Next</button>
				</div>
			</div>
		</div>
	)
}

export default PharmacyRegistration;

