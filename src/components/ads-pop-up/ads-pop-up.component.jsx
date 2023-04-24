import "./ads-pop-up.styles.scss";

const AdsPopUp = ({displayPopUp, setDisplayPopUp, setFilter}) => {

	const handleAdPopUpClose = () => {
		setDisplayPopUp("");
		setFilter("");
	}

	return(
		<div className={`ads-pop-up ${displayPopUp}`}>
			<div className="ads-pop-up__wrapper">
				<div className="ads-pop-up__x">
					<button onClick={handleAdPopUpClose} className="pop-up__close">&#10005;</button>
				</div>
				<div className="ads-pop-up__add-image">
					<button className="ads-pop-up__button">Add Image</button>
				</div>
				<input className="pop-up__input" placeholder="Headline"/>
				<textarea className="pop-up__comment" rows="50" cols="50" placeholder="Comment"></textarea>
				<select className="pop-up__select">
					<option>Subscription</option>
					<option>Subscription</option>
					<option>Subscription</option>
					<option>Subscription</option>
				</select>
				<button className="pop-up__button">Pay</button>
			</div>
		</div>
	)
}

export default AdsPopUp;