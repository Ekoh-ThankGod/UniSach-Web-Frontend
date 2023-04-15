import {useState, useEffect} from "react";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation.component.jsx";
import useRefreshToken from "../../hooks/useRefreshToken.js";
import useAxiosPrivate from "../../hooks/useAxiosPrivate.js";
import axios from "axios";

const PlanPage =({setLoader}) => {

    const [user, setUser] =useState();

    const axiosPrivate = useAxiosPrivate();
    const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try{
        const response = await axiosPrivate.get("https://unisach-dev.onrender.com/api/users/me",{
          signal: controller.signal
        });
          setUser(response.data.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getUsers();

    return ()=> {
      isMounted = false;
      controller.abort();
    }
  }, [])

  console.log(user);

	return(
		<div>
			<ProfileNavigation setLoader={setLoader}/>
      <div>{user?.first_name}</div>
		</div>
	)
}

export default PlanPage;