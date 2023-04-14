import {useEffect} from "react";
import axios from "axios";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";

const PlanPage =({setLoader}) => {

	const getRefreshToken = async (e) => {
    e.preventDefault()
    try {
      console.log('clicked')
      const result = await axios.get(`https://unisach-dev.onrender.com/api/users/auth/refreshtoken`,  {withCredentials: true, credentials: true})
	  console.log(result.data)
    } 
    catch (error) {
      console.log(error)
    }
  }


	return(
		<div>
			<ProfileNavigation setLoader={setLoader}/>
			<button onClick={getRefreshToken}>refresh Token</button>
		</div>
	)
}

export default PlanPage;