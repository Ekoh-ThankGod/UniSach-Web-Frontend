import drug from "../../assets/logo/drug.png";
import "./home-page.styles.scss";

const HomePage = () => {
	return(
		<div className="home-page">
			<div className="home-page__text-container">
				<img src={drug} alt="" className="home-page__image"/>
				<div className="home-page__texts">
					<h3 className="home-page__h3">Search Platform</h3>
					<h1 className="home-page__h1">Wide Range of Drugs</h1>
					<p className="home-page__p">We give you access to a full range of drugs, 
						carefully selected based on your<br/> 
						location and designed to be intuitive. 
					</p>
					<button className="home-page__button">Lets Start</button>
				</div>
				<img src={drug} className="home-page__image" alt=""/>
			</div>
		</div>
	)
}

export default HomePage;