import axios from "axios";


const useRefreshToken = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	const refresh = async () => {
		try{
			const response = await axios.get("https://unisach-dev.onrender.com/api/users/auth/refreshtoken", {withCredentials: true, credentials: true});

			user.accessToken = response.data.accessToken;
			localStorage.setItem("user", JSON.stringify(user));
			console.log(response.data.accessToken);
			return response.data.accessToken;
		}
		catch(err){
			console.log(err)
		}

	}

	return refresh;
}

export default useRefreshToken;