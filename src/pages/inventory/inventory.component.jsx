import "./inventory.styles.scss";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import tablet from "../../assets/logo/tablet.png";
import syringe from "../../assets/logo/syringe.png";
import drip from "../../assets/logo/drip.png";
import antiseptics from "../../assets/logo/antiseptics.png";
import chemical from "../../assets/logo/chemical.png";
import other from "../../assets/logo/other.png";
import {Link} from "react-router-dom";
import SideBar from "../../components/side-bar/side-bar.component.jsx";
import glass from "../../assets/logo/glass-black.png";
import ReservationTable from "../../components/reservation-table/reservation-table.component.jsx";

const categories = [
	{
		id: 1,
		name: "Oral Drugs",
		representation: tablet,
		number: 10,
		background: "inventory-category__background1",
		link: "/inventory/oral-drugs"
	},
	{
		id: 2,
		name: "Injectables",
		representation: syringe,
		number: 10,
		background: "inventory-category__background2",
		link: "/inventory/syringe"
	},
	{
		id: 3,
		name: "Infusion",
		representation: drip,
		number: 8,
		background: "inventory-category__background3",
		link: "/inventory/infusion"
	},
	{
		id: 4,
		name: "External & Antiseptics",
		representation: antiseptics,
		number: 5,
		background: "inventory-category__background4",
		link: "/inventory/antiseptics"
	},
	{
		id: 5,
		name: "Disinfectants",
		representation: chemical,
		number: 3,
		background: "inventory-category__background5",
		link: "/inventory/disinfectants"
	},
	{
		id: 6,
		name: "Others",
		representation: other,
		number: 10,
		background: "inventory-category__background6",
		link: "/inventory/others"
	}

]

const Inventory = ({setLoader}) => {

	return(
		<div className="inventory-container">
			<ProfileNavigation setLoader={setLoader}/>
			<div className="inventory-container__flex">
				<div className="inventory-categories__separate">
					<h2 className="inventory-categories__lastadded">Last Added Item</h2>
					<ReservationTable/>
					<div className="inventory-categories__wrapper">
						<h2 className="inventory-categories__h2">Categories</h2>
						<div className="inventory-categories__input-img">
							<input placeholder="Search" className="inventory-categories__input"/>
							<img src={glass} alt="search glass" className="inventory-categories__img"/>
						</div>
					</div>
					<div className="inventory-categories">
						{
							categories.map(category =>{
								const {name, representation, id, number, background,link} = category;
								return(
									<Link to={`${link}`} key={id} className="inventory-category__link">
										<div className={`inventory-category ${background}`}>
											<h3 className="inventory-category__h3">{name}</h3>
											<div  className="inventory-category__flex">
												<img className="inventory-category__img" src={representation} alt=""/>
												<div><span className="inventory-category__span">{number}</span></div>
											</div>
										</div>
									</Link>
								)
							})
						}
					</div>
				</div>
				<SideBar/>
			</div>
		</div>
	)
}

export default Inventory;