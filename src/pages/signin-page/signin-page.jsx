import "./signin-page.styles.scss";
import drugCart from "../../assets/logo/drug-cart.jpg";
const SignInPage = () =>{
	return(
		<div className="signin-page__container">
			<div className="signin-page__box">
				<img src={drugCart} alt="drug cart" className="signin-page__picture"/>
				<div className="signin-page__data">
					<h2 className="signin-page__heading">Login to your account</h2>
					<div className="signin-page__inputs">
						<input placeholder="Username" type="email" className="signin-page__input"/>
						<input placeholder="Password" type="password" className="signin-page__input"/>
					</div>
					<div className="signin-page__check-box__container">
						<div className="signin-page__inputcontainer">
							<input type="checkbox" className="signin-page__check-box"/>
							<span className="signin-page__remember">Remember me</span>
						</div>
						<div className="forgot-password__container">
							<span className="signin-page__forgot">Forgot your password?</span>
						</div>
					</div>
					<button className="signin-page__button1">Sign in</button>
					<div className="signin-page__text">
						<p className="signin-page__paragraph">Don't have an account? </p>
						<button className="signin-page__button2">Sign up</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignInPage;