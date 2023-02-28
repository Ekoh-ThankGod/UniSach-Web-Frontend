import "./signup.styles.scss";
const SignUpPage = () =>{
	return(
		<div className="signup-container">
			<h2 className="signup-container__text">Please Enter Details to Register</h2>
			<div className="signup-container__margin">
				<span className="signup-container__span">Create an Account</span>
				<div className="signup-container__account">
					<input type="text" className="signup-container__input signup-container__common" placeholder="First Name"/>
					<input type="text" className="signup-container__input" placeholder="Last Name"/>
					<input type="text" className="signup-container__input signup-container__common" placeholder="Email"/>
					<input type="tel" className="signup-container__input" placeholder="Phone Number"/>
					<input type="password" className="signup-container__input signup-container__common" placeholder="Password "/>
					<input type="password" className="signup-container__input" placeholder="Confirm Password"/>
					<div className="signup-container__buttonholder">
						<button className="signup-container__button">Continue</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage;