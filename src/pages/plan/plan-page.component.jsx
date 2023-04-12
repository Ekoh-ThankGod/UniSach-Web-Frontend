import {useEffect} from "react";
import axios from "axios";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";

const PlanPage =({setLoader}) => {

	// useEffect(() => {
	// 	axios.get("https://unisach-dev.onrender.com/api/users/auth/refreshtoken",{
	// 		withCredentials: true,
	// 		credentials: true
	// 	})
	// 	.then(res => console.log(res));
	// }, [])

	return(
		<div>
			<ProfileNavigation setLoader={setLoader}/>
		</div>
	)
}

export default PlanPage;