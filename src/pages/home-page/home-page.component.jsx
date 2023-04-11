import Navigation from "../../components/navigation/navigation.component.jsx";
import "./home-page.styles.scss";
import WideRange from "../../components/wide-range/wide-range.component.jsx";
import WhyUs from "../../components/why-us/why-us.component.jsx";

const HomePage = () => {
	return(
		<div className="home-page">
			<Navigation/>
			<WideRange/>
			<WhyUs/>
		</div>
	)
}

export default HomePage;