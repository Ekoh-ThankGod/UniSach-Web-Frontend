import "./signin-page.styles.scss";
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/unisachlogo.png";
import google from "../../assets/logo/google.png";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";

const SignInPage = () =>{
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const onSignInInput = (event) =>{
		const {name, value} = event.target; 
		if(name === "email"){setUserName(value)}
		else{setPassword(value)}
	}

	// console.log(userName);
	// console.log(password);


	const onSignInButton = (event) =>{
		// console.log(event.target);	
	}

	return(
		<div className="signin-page__container">
			<div className="signin-page__box">
				<div className="signin-page__data">
					<UnisachLogo/>
					<div className="signin-page__welcome">
						<h2 className="signin-page__heading">Welcome back</h2>
						<div className="signin-page__inputs">
							<div className="signin-page__inputs-container">
								<input onChange={(event) => onSignInInput(event)} type="email" name="email" 
								className="signin-page__input"/>
								<label className="signin-page__label">Email adress</label>
							</div>
							<div className="signin-page__inputs-container">
								<input onChange={(event) => onSignInInput(event)} type="password" name="password" 
								className="signin-page__input"/>
								<label className="signin-page__label signin-page__label-password">Password</label>
							</div>
						</div>
						<div className="signin-page__check-box__container">
							<div className="signin-page__inputcontainer">
								<input onChange={(event) => onSignInInput(event)} type="checkbox" className="signin-page__check-box"/>
								<span className="signin-page__remember">Remember me</span>
							</div>
							<div className="forgot-password__container">
								<Link to="" className="signin-page__forgot">Forgot your password?</Link>
							</div>
						</div>
						<button onClick={(event) => onSignInButton(event)} className="signin-page__button1">Sign in</button>
						<div className="signin-page__text">
							<p className="signin-page__paragraph">Don't have an account? </p>
							<Link to="/signup" className="signin-page__btn2holder">
								<button className="signin-page__button2">Sign up</button>
							</Link>
						</div>
						<div className="signin-page__hr-container">
							<hr className="signin-page__hr"/> <span className="signin-page__hr-span">OR</span>
							<hr className="signin-page__hr"/>
						</div>
						<button className="signin-page__google"><img className="signin-page__google-img" src={google} alt=""/>Continue with google</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignInPage;