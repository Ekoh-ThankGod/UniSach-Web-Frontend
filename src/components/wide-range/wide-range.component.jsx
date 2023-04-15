import "./wide-range.styles.scss";
import {useNavigate} from "react-router-dom";

const WideRange = () =>{

	const navigate = useNavigate();


	return(
		<div className="wide-range">
			<div className="wide-range__wrapper">
				<div className="wide-range__boundary">
					<h2 className="wide-range__h2">Search Platform</h2>
					<h1 className="wide-range__h1">Wide Range of Drugs</h1>
					<p className="wide-range__p">We give you access to a full range of drugs, carefully
					 selected based <br/>on your location and designed to be intuitive. </p>
					<div className="wide-range__button-holder">
						<button onClick={() => navigate("/signup") } className="wide-range__button">Lets start</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WideRange;