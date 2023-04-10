import "./profile.styles.scss";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import ReservationTable from "../../components/reservation-table/reservation-table.component.jsx";
import ReservationSelect from "../../components/reservation-tab/reservation-tab.component.jsx";
import SideBar from "../../components/side-bar/side-bar.component.jsx";

const ProfilePage = () => {
	return(
		<div className="profile-container">
			<ProfileNavigation/>
			<div className="profile-container__body">
				<div className="">
					<ReservationSelect/>
					<ReservationTable/>
				</div>
				<SideBar/>
			</div>
		</div>
	)
}

export default ProfilePage;