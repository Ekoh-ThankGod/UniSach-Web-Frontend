import "./profile-navigation.styles.scss";
import UnisachLogo from "../../assets/logo/unisachlogo.png";
import home from "../../assets/logo/home.png";
import profile from "../../assets/logo/profile.png";
import {Link} from "react-router-dom";
import {useState} from "react";
// import axios from "axios";
import {useNavigate} from "react-router-dom";


const ProfileNavigation = () => {

	const [displayDropDown, setDislayDropDown] =useState("");
	const navigate = useNavigate();

	const onIconClick =(event) => {
		setDislayDropDown("profile-navigation__dropdown-display")
	}

	const handleSignOut = (event) => {
		localStorage.removeItem("user");
		localStorage.removeItem("email");
		navigate("/");
	}


	return(
		<div className="profile-navigation">
			<Link to="/" className="profile-navigation__img-span">
				<img className="profile-navigation__img" src={UnisachLogo} alt="unisach"/>
				<span className="profile-navigation__span">Unisach</span>
			</Link>
			<ul className="profile-navigation__ul">
				<li className="profile-navigation__li">Home</li>
				<li className="profile-navigation__li">Inventory</li>
				<li className="profile-navigation__li">Plan</li>
			</ul>
			<button className="profile-navigation__btn">Place ADS</button>
			<div className="profile-navigation__phc">
				<div className="profile-navigation__profile">
					<button onClick={(event)=> onIconClick(event)} className="profile-navigation__btn-icon"><img src={profile} alt="" className="profile-navigation__icon"/></button>
					<div className={`profile-navigation__dropdown ${displayDropDown}`}>
						<button onClick={(event) => handleSignOut(event)} className="profile-navigation__dropdown-btn">signout</button>
					</div>
				</div>
				<Link to="/dashboard" className="profile-navigation__icon-home"><img src={home} alt="" className="profile-navigation__icon"/></Link>
				<button className="profile-navigation__contact">contact us</button>
			</div>
		</div>
	)
}

export default ProfileNavigation;