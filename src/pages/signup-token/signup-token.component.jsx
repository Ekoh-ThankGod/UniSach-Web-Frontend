import {useState} from "react";
import "./signup-token.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import { useNavigate } from 'react-router-dom';

const TokenPage = () => {

	const [otp1, setOtp1] = useState("");
	const [otp2, setOtp2] = useState("");
	const [otp3, setOtp3] = useState("");
	const [otp4, setOtp4] = useState("");
	const [otp5, setOtp5] = useState("");
	const [otp6, setOtp6] = useState("");

	const [tokenError, setTokenError] = useState("tokensdf kfhfhdfhdf");
	const [displayTokenError, setDisplayTokenError] = useState("signup-token__error-display");

	const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;

	const navigate = useNavigate();

	const focusNextInput = (event) =>{
		if(event.key === "Delete" || event.key==="Backspace"){
			const nextFocus = event.target.tabIndex - 2;
		    if (nextFocus > -1) {
			    event.target.form.elements[nextFocus].focus()
		    }
		} 
		else{
			const nextFocus = event.target.tabIndex;

			if(nextFocus < 6){
				event.target.form.elements[nextFocus].focus();
			}
		}
	}

	const handleTokenChange = (e) =>{

		const {value, tabIndex} = e.target;

		if(tabIndex === 1){setOtp1(value)}
		else if(tabIndex===2){setOtp2(value)}
		else if(tabIndex===3){setOtp3(value)}
		else if(tabIndex===4){setOtp4(value)}
		else if(tabIndex===5){setOtp5(value)}
		else if(tabIndex===6){setOtp6(value)}
	}

	const onTokenSubmit = (event) => {
		event.preventDefault();

		if(otp.length < 6){
			setOtp1("");setOtp2("");setOtp3("");
			setOtp4("");setOtp5("");setOtp6("");
			return;
		}

		fetch("https://unisach-dev.onrender.com/api/users/auth/verifyotp", {
			method: "POST",
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify({
				"email": "johndoe@gmail.com",
				"otp": otp
			})
		})
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(err => {
			if(err){
				console.log("dvkdvdvjvk")
				setDisplayTokenError("");
				setTokenError("Wrong OTP");
			}
		});
	}
 
	return(
		<div className="">
			<UnisachLogo/>
			<div className="signup-token__container">
			<form className="signup-token__ash" onSubmit ={(event) => onTokenSubmit(event)}>
				<h2 className="signup-token__h2">Email otp verification</h2>
				<div className="signup-token__input-container">
					<input tabIndex="1" value={otp1} onChange={(e) => handleTokenChange(e)} autoFocus onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="2" value={otp2} onChange={(e) => handleTokenChange(e)} onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="3" value={otp3} onChange={(e) => handleTokenChange(e)} onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="4" value={otp4} onChange={(e) => handleTokenChange(e)} onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="5" value={otp5} onChange={(e) => handleTokenChange(e)} onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="6" value={otp6} onChange={(e) => handleTokenChange(e)} onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
				</div>
				<button className="signup-token__button" type="submit">OK</button>
				<div className="signup-token__texts">
					<span className="signup-token__comment">Didn't get otp</span>
					<span className="signup-token__resend">Resend</span>
				</div>
				<span className={`signup-token__error ${displayTokenError}`}>{tokenError}</span>
			</form>
			</div>
		</div>
	)
}

export default TokenPage;