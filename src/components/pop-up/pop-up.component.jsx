import "./pop-up.styles.scss";
import {useState} from "react";

const PopUp = ({displayPopUp, setDisplayPopUp, setFilter}) =>{

	const handlePopUpClose = () => {
		setDisplayPopUp("");
		setFilter("");
	}

	return(
		<div className={`pop-up ${displayPopUp}`}>
			<div className="pop-up__separate">
				<h2 className="pop-up__h2">Add Item (Drug)</h2>
				<button onClick={handlePopUpClose} className="pop-up__close">&#10005;</button>
			</div>
			<div className="pop-up__wrapper">
				<input className="pop-up__input" placeholder="Drug Name"/>
				<select className="pop-up__select">
					<option className="pop-up__option">Oral drug</option>
					<option className="pop-up__option">Injectables</option>
					<option className="pop-up__option">Infusion</option>
					<option className="pop-up__option">External & Antiseptics</option>
					<option className="pop-up__option">Disinfectants</option>
					<option className="pop-up__option">Others</option>
				</select>
				<input className="pop-up__input" placeholder="Drug Category"/>
				<input className="pop-up__input" placeholder="Drug Price"/>
				<textarea className="pop-up__comment" rows="50" cols="50" placeholder="Comment"></textarea>
				<button className="pop-up__button">Save</button>
			</div>
		</div>
	)
}

export default PopUp;