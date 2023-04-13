import "./descrete-shopping.styles.scss";
import discrete from "../../assets/logo/descrete-shopping.png";

const DescreteShopping = () => {
	return(
		<div className="descrete-shopping">
			<img className="descrete-shopping__img" src={discrete} alt="descrete shopping"/>
			<h2 className="descrete-shopping__h2">Discrete Shopping</h2>
			<p className="descrete-shopping__p">
				There is no need for anyone except you to know <br/>what you ordered, making sure your details are safe<br/> that way.
			</p>
		</div>
	)
}

export default DescreteShopping;