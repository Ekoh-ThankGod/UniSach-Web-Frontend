import "./signin-page.styles.scss";
import {useState} from "react";
import {Link} from "react-router-dom";
import UnisachLogo from "../../components/unisachlogo/unisachlogo.component.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignInPage = ({setUserData, setLoader, showNotificationError,showNotificationSuccess}) =>{
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [rememberPassword, setRememberPassword] = useState(false);

	const clientId = "";

	const navigate = useNavigate();

	const onSignInInput = (event) =>{
		const {name, value} = event.target; 
		if(name === "email"){setUserName(value)}
		else{setPassword(value)}
	}

	const onhandleCheckBoxChange = (event) =>{
		console.log(event.target.checked);
	}


	const onSignInButton = (event) =>{

		if(userName==="" || password===""){
			showNotificationError("please fill in your credentials");
			return;
		}

		setLoader(true);

		axios.post("https://unisach-dev.onrender.com/api/users/auth/login",{
				email: userName,
			 	password: password
				})
			.then(response => {
				if(response.data.data){
					if(response.data.data.message === "Please verify your email to continue your Registration process"){
						showNotificationSuccess(response.data.data.message);
					}
					else{
						console.log(response.data.data.user);
						showNotificationSuccess("login successful");
						setUserData(response.data.data);
						navigate("/");
					};
					setLoader(false);
				}
			})
			.catch(err => {
				showNotificationError(err.response.data.message);
				setLoader(false)
			});	
	}

	const onHandleGoogleResponse = (response) => {
		console.log(response.credential)

		axios.post("https://unisach-dev.onrender.com/api/users/auth/signin/google",{
	      token: response.credential,
	      role: "Pharmacist"
	      })
	    .then(response =>{
	      console.log(response)
	    })
	    .catch(err => {
	      showNotificationError("unable to signin with google")
	    })
	}
	
	return(
		<div className="signin-page__container">
			<div className="signin-page__box">
				<div className="signin-page__data">
					<UnisachLogo/>
					<div className="signin-page__welcome">
						<h2 className="signin-page__heading">Welcome back</h2>
						<div className="signin-page__inputs">
							<div className="signin-page__inputs-container signin-page__inputs-margin">
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
								<input onChange={(event) => onhandleCheckBoxChange(event)} type="checkbox" className="signin-page__check-box"/>
								<span className="signin-page__remember">Remember me</span>
							</div>
							<div className="forgot-password__container">
								<Link to="/forgot-password" className="signin-page__forgot">Forgot your password?</Link>
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
							<GoogleOAuthProvider clientId={clientId}>
								<GoogleLogin onSuccess={credentialResponse => { onHandleGoogleResponse(credentialResponse)}} 
								onError={() => {showNotificationError('Login with google Failed')}}/>
						    </GoogleOAuthProvider>
						</div>
				</div>
			</div>
		</div>
	)
}

export default SignInPage;