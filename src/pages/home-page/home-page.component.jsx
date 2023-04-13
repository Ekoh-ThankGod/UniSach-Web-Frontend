import Navigation from "../../components/navigation/navigation.component.jsx";
import "./home-page.styles.scss";
import WideRange from "../../components/wide-range/wide-range.component.jsx";
import WhyUs from "../../components/why-us/why-us.component.jsx";
import MedSearch from "../../components/med-search/med-search.component.jsx";
import DescreteShopping from "../../components/descrete-shopping/descrete-shopping.component.jsx";
import Product from "../../components/product/product-component.jsx";
import MobileApp from "../../components/mobile-app/mobile-app.component.jsx";

const HomePage = ({setLoader}) => {
	return(
		<div className="home-page">
			<Navigation setLoader={setLoader}/>
			<WideRange/>
			<WhyUs/>
			<MedSearch/>
			<MobileApp/>
			<DescreteShopping/>
			<div className="home-page__customers">
				<h2 className="home-page__customers__h2">What customers<br/> are <span className="home-page__customers__span">saying</span></h2>
				<p className="home-page__customers__p">
					At Unisach, we are exceptional and our customers<br/> 
					have noticed. Here”s what they<br/> have to say
				</p>
			</div>
			<div className="reliable-faster">
				<h2 className="reliable-faster__h2">Simpler, <span className="reliable-faster__span">reliable</span>, faster and better pharmacy</h2>
				<p className="home-page__customers__p">
					We have optimised the part of pharmacy that are complicated.
					we believe in a system that is accessible to any an everyone
				</p>
			</div>
			<Product/>
		</div>
	)
}

export default HomePage;