import "./profile-navigation.styles.scss";
import UnisachLogo from "../../assets/logo/unisachlogo.png";
import home from "../../assets/logo/home.png";
import profile from "../../assets/logo/profile.png";
import profil from "../../assets/logo/profil.png";
import email from "../../assets/logo/email.png";
import logout from "../../assets/logo/logout.png";
import setting from "../../assets/logo/setting.png";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const ProfileNavigation = ({setLoader, setFilter, setDisplayPopUp}) => {

	const [displayDropDown, setDislayDropDown] =useState("");
	const [changeHomeTextColor, setChangeHomeTextColor] = useState("");
	const [changeInventoryTextColor, setChangeInventoryTextColor] = useState("");
	const [changePlanTextColor, setChangePlanTextColor] = useState("");

	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("user"));

	const onIconClick =(event) => {
		setDislayDropDown("profile-navigation__dropdown-display")
	}

	const handleSignOut = (event) => {
		setLoader(true);
		axios.get("https://unisach-dev.onrender.com/api/users/auth/logout")
		.then(res => {
			setLoader(false);
			if(res){
				localStorage.removeItem("user");
				localStorage.removeItem("email");
				navigate("/");
			}
		})
	}

	useEffect(() => {
		if(window.location.pathname === "/dashboard"){
			setChangeHomeTextColor("profile-navigation__color");
		}
		else if(window.location.pathname === "/inventory"){
			setChangeInventoryTextColor("profile-navigation__color")
		}
		else if(window.location.pathname ==="/plan"){
			setChangePlanTextColor("profile-navigation__color");
		}
	},[]);

	const handlePopUpAds = () => {
		setDisplayPopUp("pop-up__display");
		setFilter("inventory-oral-drugs__filter");
	}


	return(
		<div className="profile-navigation">
			<Link to="/" className="profile-navigation__img-span">
				<img className="profile-navigation__img" src={UnisachLogo} alt="unisach"/>
				<span className="profile-navigation__span">Unisach</span>
			</Link>
			<ul className="profile-navigation__ul">
				<li className="profile-navigation__li"><Link to="/dashboard" className={`profile-navigation__inventory ${changeHomeTextColor}`}>Home</Link></li>
				<li className="profile-navigation__li"><Link to="/inventory" className={`profile-navigation__inventory ${changeInventoryTextColor}`}>Inventory</Link></li>
				<li className="profile-navigation__li"><Link to="/plan" className={`profile-navigation__inventory ${changePlanTextColor}`}>Plan</Link></li>
			</ul>
			<button onClick={handlePopUpAds} className="profile-navigation__btn">Place ADS</button>
			<div className="profile-navigation__phc">
				<div className="profile-navigation__profile">
					<button onClick={(event)=> onIconClick(event)} className="profile-navigation__btn-icon"><img src={profile} alt="" className="profile-navigation__icon"/></button>
					<div className={`profile-navigation__dropdown ${displayDropDown}`}>
						<div className="profile-navigation__email">
							<Link to="/" className="profile-navigation__menu"><img className="profile-navigation__image1" src={email} alt=""/><span>{user.user.name}</span></Link>
							<Link to="/" className="profile-navigation__menu"><img className="profile-navigation__image2" src={profil} alt=""/><span>Profile</span></Link>
							<Link to="/" className="profile-navigation__menu"><img className="profile-navigation__im" src={setting} alt=""/><span>setting</span></Link>
							<button onClick={(event) => handleSignOut(event)} className="profile-navigation__dropdown-btn"><img className="profile-navigation__image3" src={logout} alt=""/><span>signout</span></button>
						</div>
					</div>
				</div>
				<Link to="/store-profile" className="profile-navigation__icon-home"><img src={home} alt="" className="profile-navigation__icon"/></Link>
				<button className="profile-navigation__contact">contact us</button>
			</div>
		</div>
	)
}

export default ProfileNavigation;