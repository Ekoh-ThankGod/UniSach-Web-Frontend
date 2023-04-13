import pharmacy from "../../assets/logo/pharmacy.png";
import "./med-search.styles.scss";

const MedSearch = () => {
	return(
		<div className="med-search">
			<img className="med-search__img" src={pharmacy} alt="pharmacy"/>
			<div className="med-search__wrapper">
				<h2 className="med-search__h2">Trusted med search</h2>
				<p className="med-search__p">
					Access medication health tips, medical reports,<br/> reminders,
					interaction checkers and many other<br/>
					user friendly experience within the app
				</p>
			</div>
		</div>
	)
}

export default MedSearch;