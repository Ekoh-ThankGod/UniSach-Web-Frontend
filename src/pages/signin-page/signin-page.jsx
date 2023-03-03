import "./signin-page.styles.scss";
import drugCart from "../../assets/logo/drug-cart.jpg";
import {useState} from "react";
import {Link} from "react-router-dom";

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
				<img src={drugCart} alt="drug cart" className="signin-page__picture"/>
				<div className="signin-page__data">
					<h2 className="signin-page__heading">Login to your account</h2>
					<div className="signin-page__inputs">
						<input onChange={(event) => onSignInInput(event)} placeholder="Username" type="email" name="email" 
						className="signin-page__input"/>
						<input onChange={(event) => onSignInInput(event)} placeholder="Password" type="password" name="password" 
						className="signin-page__input"/>
					</div>
					<div className="signin-page__check-box__container">
						<div className="signin-page__inputcontainer">
							<input onChange={(event) => onSignInInput(event)} type="checkbox" className="signin-page__check-box"/>
							<span className="signin-page__remember">Remember me</span>
						</div>
						<div className="forgot-password__container">
							<span className="signin-page__forgot">Forgot your password?</span>
						</div>
					</div>
					<button onClick={(event) => onSignInButton(event)} className="signin-page__button1">Sign in</button>
					<div className="signin-page__text">
						<p className="signin-page__paragraph">Don't have an account? </p>
						<Link to="/signup" className="signin-page__btn2holder">
							<button className="signin-page__button2">Sign up</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignInPage;