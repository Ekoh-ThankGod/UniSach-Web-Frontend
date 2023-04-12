import "./inventory-oral-drugs.styles.scss";
import SideBar from "../../components/side-bar/side-bar.component.jsx";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import AddItemButton from "../../components/add-item-button/add-item-button.component.jsx";
import glass from "../../assets/logo/glass-black.png";
import ReservationTable from "../../components/reservation-table/reservation-table.component.jsx";

const InventoryOralDrugs = ({setLoader}) => {
	return(
		<div className="inventory-oral-drugs">
			<ProfileNavigation setLoader={setLoader}/>
			<div className="inventory-oral-drugs__wrapper">
				<div className="inventory-oral-drugs__container">
					<div className="inventory-oral-drugs__text-container">
						<div className="inventory-oral-drugs__texts">
							<h1 className="inventory-oral-drugs__h1">Oral Drugs</h1>
							<span className="inventory-oral-drugs__span">10 items</span>
						</div>
						<AddItemButton/>
					</div>
					<div className="inventory-oral-drugs__input-wrapper">
						<input className="inventory-oral-drugs__input" placeholder="Search" alt=""/>
						<img className="inventory-oral-drugs__img" src={glass} alt="glass viewer"/>
					</div>
					<div className="inventory-oral-drugs__table">
						<ReservationTable/>
					</div>
				</div>
				<SideBar/>
			</div>
		</div>
	)
}

export default InventoryOralDrugs;