import "./profile.styles.scss";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import ReservationTable from "../../components/reservation-table/reservation-table.component.jsx";
import ReservationSelect from "../../components/reservation-tab/reservation-tab.component.jsx";
import SideBar from "../../components/side-bar/side-bar.component.jsx";
import pay from "../../assets/logo/pay.png";

const ProfilePage = ({setLoader}) => {
	return(
		<div className="profile-container">
			<ProfileNavigation setLoader={setLoader}/>
			<div className="profile-container__body">
				<div className="">
					<ReservationSelect/>
					<ReservationTable/>
					<div className="profile-container__wrapper">
						<div className="profile-container__separate">
							<h2 className="profile-container__h2">Inventory</h2>
							<img src={pay} alt="track" className="profile-container__img"/>
							<span className="profile-container__left">30 of 250</span>
						</div>
						<div className="profile-container__separate">
							<h2 className="profile-container__h2">Payment Plan</h2>
							<img src={pay} alt="track" className="profile-container__img"/>
							<span className="profile-container__level">Level2</span>
							<span className="profile-container__left">30 Days left</span>
						</div>
					</div>
				</div>
				<SideBar/>
			</div>
		</div>
	)
}

export default ProfilePage;