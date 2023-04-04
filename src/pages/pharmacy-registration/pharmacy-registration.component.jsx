import "./pharmacy-registration.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";

const registerPharmacy = [{id: 1, name:"pharmacy name", type:"text", placeholder:"Pharmacy Name", className:"pharmacy-registration__margin"},
	{id: 2, name:"Pharmacy Type", type:"text", placeholder:"Pharmacy Type", className:""},
	{id: 3, name:"Pharmacy Email", type:"email", placeholder:"Pharmacy Email", className:"pharmacy-registration__margin"},
	{id: 4, name:"Pharmacy Phone", type:"tel", placeholder:"Pharmacy Phone", className:""},
	{id: 5, name:"Pharmacy Moto", type:"text", placeholder:"Pharmacy Moto", className:"pharmacy-registration__margin"},
	{id: 6, name:"Pharmacy License No.", type:"text", placeholder:"Pharmacy License No.", className:""}
	]

const PharmacyRegistration = () => {
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
										<input name={name} type={type} placeholder={placeholder} className={`pharmacy-registration__input ${className}`}/>
									</div>
								)
							})
						}
					</div>
					<button className="pharmacy-registration__button">Next</button>
				</div>
			</div>
		</div>
	)
}

export default PharmacyRegistration;

