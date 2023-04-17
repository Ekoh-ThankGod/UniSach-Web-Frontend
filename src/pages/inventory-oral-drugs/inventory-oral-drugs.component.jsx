import "./inventory-oral-drugs.styles.scss";
import SideBar from "../../components/side-bar/side-bar.component.jsx";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import AddItemButton from "../../components/add-item-button/add-item-button.component.jsx";
import glass from "../../assets/logo/glass-black.png";
import ReservationTable from "../../components/reservation-table/reservation-table.component.jsx";
import PopUp from "../../components/pop-up/pop-up.component.jsx";
import {useState} from "react";

const InventoryOralDrugs = ({setLoader, displayPopUp, setDisplayPopUp, filter, setFilter}) => {
	
	return(
		<div className="inventory-oral-drugs">
			<PopUp displayPopUp={displayPopUp}/>
			<ProfileNavigation setLoader={setLoader}/>
			<div className={`inventory-oral-drugs__wrapper ${filter}`}>
				<div className="inventory-oral-drugs__container">
					<div className="inventory-oral-drugs__text-container">
						<div className="inventory-oral-drugs__texts">
							<h1 className="inventory-oral-drugs__h1">Oral Drugs</h1>
							<span className="inventory-oral-drugs__span">10 items</span>
						</div>
						<AddItemButton setDisplayPopUp={setDisplayPopUp} setFilter={setFilter}/>
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