import logo from "../../assets/logo/unisachlogo.png";
import "./unisachlogo.styles.scss";
import {Link} from "react-router-dom";
const UnisachLogo = () =>{
	return(

		<div className="unisach-logo">
			<Link to="/"><img src={logo} alt=""/></Link>
		</div>
	)
}

export default UnisachLogo;