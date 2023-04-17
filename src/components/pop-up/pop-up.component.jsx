import "./pop-up.styles.scss";

const PopUp = ({displayPopUp}) =>{

	return(
		<div className={`pop-up ${displayPopUp}`}>
			<h2 className="pop-up__h2">Add Item (Drug)</h2>
			<div className="pop-up__wrapper">
				<input className="pop-up__input" placeholder="Drug Name"/>
				<select className="pop-up__select">
					<option className="pop-up__option">Oral drug</option>
					<option className="pop-up__option">Oral drug</option>
					<option className="pop-up__option">Oral drug</option>
					<option className="pop-up__option">Oral drug</option>
				</select>
				<input className="pop-up__input" placeholder="Drug Name"/>
				<input className="pop-up__input" placeholder="Drug Name"/>
				<textarea className="pop-up__comment" rows="50" cols="50" placeholder="Comment"></textarea>
				<button className="pop-up__button">Save</button>
			</div>
		</div>
	)
}

export default PopUp;