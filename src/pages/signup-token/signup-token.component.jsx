import {useState} from "react";
import "./signup-token.styles.scss";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";

const TokenPage = () => {


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
		
	}

	const onTokenSubmit = (event) => {
		event.preventDefault();


	}
 
	return(
		<div className="">
			<UnisachLogo/>
			<div className="signup-token__container">
			<form className="signup-token__ash">
				<h2 className="signup-token__h2">Email otp verification</h2>
				<div className="signup-token__input-container">
					<input tabIndex="1" onChange={(e) => handleTokenChange(e)} autoFocus onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="2" onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="3" onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="4" onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="5" onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
					<input tabIndex="6" onKeyUp = {(event) => focusNextInput(event)} 
					autoComplete="nope" maxLength={1} type="text" className="signup-token__input"/>
				</div>
				<button className="signup-token__button" type="submit" onSubmit ={(event) => onTokenSubmit(event)}>OK</button>
				<div className="signup-token__texts">
					<span className="signup-token__comment">Didn't get otp</span>
					<span className="signup-token__resend">Resend</span>
				</div>
			</form>
			</div>
		</div>
	)
}

export default TokenPage;