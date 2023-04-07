import Navigation from "../../components/navigation/navigation.component.jsx";
import "./home-page.styles.scss";
import WideRange from "../../components/wide-range/wide-range.component.jsx";

const HomePage = () => {
	return(
		<div className="home-page">
			<Navigation/>
			<div className="home-page__container">
				<WideRange/>
			</div>
		</div>
	)
}

export default HomePage;