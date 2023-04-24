import "./store-page.styles.scss";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import SideBar from "../../components/side-bar/side-bar.component.jsx";
import promote from "../../assets/logo/promote.png";
import sponsor from "../../assets/logo/sponsor.png";
import AdsPopUp from "../../components/ads-pop-up/ads-pop-up.component.jsx";

const StorePage = ({setFilter, setDisplayPopUp, filter, displayPopUp}) => {
	return(
		<div className="store-page">
			<AdsPopUp displayPopUp={displayPopUp} setFilter={setFilter} setDisplayPopUp={setDisplayPopUp} />
			<ProfileNavigation setFilter={setFilter} setDisplayPopUp={setDisplayPopUp}/>
			<div className={`store-page__container ${filter}`}>
				<div className="store-page__wrapper">
					<div className="store-page__holder">
						<h1 className="store-page__profile">Store Profile</h1>
						<select className="store-page__button">
							<option>Store name</option>
						</select>
					</div>
					<h2 className="store-page__plan">Payment Plan</h2>
					<span className="store-page__level">Level 2</span>
					<div className="store-page__inventory">
						<div className="">
							<h2 className="store-page__inventory-h2">Inventory</h2>
							<span className="store-page__level">30 Items out of 250</span>
						</div>
						<div className="store-page__ads-container">
							<div className="store-page__promote">
								<img src={promote} alt="promote add" className="store-page__img"/>
								<span className="store-page__ads">Promote Store</span>
							</div>
							<div className="store-page__promote">
								<img src={sponsor} alt="sponsor add" className="store-page__img"/>
								<span className="store-page__ads">Sponsor Ads</span>
							</div>
						</div>
					</div>
				</div>
				<SideBar/>
			</div>
		</div>
	)
}

export default StorePage;