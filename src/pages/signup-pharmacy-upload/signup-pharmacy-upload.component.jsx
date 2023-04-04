import "./signup-pharmacy-upload.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import upload from "../../assets/logo/upload.png";

const RegisterPharmacyUpload = () =>{
	return(
		<div className="pharmacy-registration-upload">
			<UnisachLogo/>
			<div className="pharmacy-registration-upload__background">
				<div className="pharmacy-registration-upload__ash">
					<textarea className="pharmacy-registration-upload__textarea" rows="6" cols="50" placeholder="Details"></textarea>
					<button className="pharmacy-registration-upload__button">
						<img src={upload} alt="upload picture"/>
					</button>
					<div className="pharmacy-registration-upload__addattach">
						<span className="pharmacy-registration-upload__span">Add attachment</span>
						<span className="pharmacy-registration-upload__span">*docs,pdf,txt files</span>
					</div>
					<button className="pharmacy-registration-upload__finish">finish</button>
				</div>
			</div>
		</div>
	)
}

export default RegisterPharmacyUpload;