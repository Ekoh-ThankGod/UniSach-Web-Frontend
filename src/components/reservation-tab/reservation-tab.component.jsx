import "./reservation-tab.styles.scss";
import glass from "../../assets/logo/glass.png";
import cart from "../../assets/logo/cart.png";

const ReservationSelect = () => {
	return(
		<div className="reservation-select__container">
			<div className="reservation-select__search-bar">
				<img src={cart} alt="cart" className="reservation-select__cart"/>
				<span className="reservation-select__text">Reservation</span>
				<div className="reservation-select__relative">
					<input className="reservation-select__input" placeholder="Search"/>
					<button className="reservation-select__button"><img src={glass} alt="search glass"/></button>
				</div>
			</div>
			<div className="reservation-select__text-cont">
				<span className="reservation-select__active">Active</span>
				<span className="reservation-select__inactive">Inactive</span>
			</div>
		</div>
	)
}

export default ReservationSelect;