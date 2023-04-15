import "./navigation.styles.scss";
import logo from "../../assets/logo/unisachlogo.png";
import {Link, useNavigate} from "react-router-dom";
import profile from "../../assets/logo/profile.png";
import axios from "axios";


const Navigation = ({setLoader}) =>{
	const user = JSON.parse(localStorage.getItem("user"));
	const navigate = useNavigate();
	let displayButton;

	const onHandleSignOut = (event) =>{
		setLoader(true);
		axios.get("https://unisach-dev.onrender.com/api/users/auth/logout")
		.then(res => {
			if(res){
				setLoader(false);
				localStorage.removeItem("user");
				localStorage.removeItem("email");
				navigate("/");
			}
		})

	}

	if(user || user?.accessToken){
		displayButton = <div className="profile-picture__change-holder">
							<Link to="/dashboard"><img src={profile} alt="profile" className="profile-picture__change"/></Link>
							<button onClick={(event) => onHandleSignOut(event)} className="login-signup__signup login-signup__common">SignOut</button>
						</div>
	}
	else{
		displayButton = <div className="login-signup">
							<div className="login-signup__container">
								<Link to="/login">
									<button className="login-signup__login login-signup__common">Login</button>
								</Link>	
								<Link to="/signup">
									<button className="login-signup__signup login-signup__common">Sign up</button>
								</Link>
							</div>
						</div>
	}
	return(
		<div className="navigation">
			<Link to="/" className="logo-container">
				<img src={logo} className="logo-container__logo" alt="pharmacy-logo"/>
				<span className="logo-container__text">Unisac</span>
			</Link>
			{displayButton}
		</div>
	)
}

export default Navigation;