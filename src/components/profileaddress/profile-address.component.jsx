import "./profile-address.styles.scss";

const ProfileAddress = ({ others, address, classDisplayAddress }) =>{

	return(
		<div className={`profile-address ${classDisplayAddress}`}>
			<div className="profile-address__container">
				<span className="profile-address__number profile-address__common"> 1 </span>
				<span className="profile-address__subheading ">Profile</span>
			</div>
			<div className="profile-address__container">
				<span className={`profile-address__number ${address}`}> 2 </span>
				<span className="profile-address__subheading">Adress</span>
			</div>
			<div className="profile-address__container">
				<span className={`profile-address__number ${others}`}> 3 </span>
				<span className="profile-address__subheading">Others</span>
			</div>
		</div>
	)
}

export default ProfileAddress;