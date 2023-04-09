import {Navigate} from "react-router-dom";

const Protected = ({children}) => {
	const user = JSON.parse(localStorage.getItem("user"));

	if(!user || !user.accessToken){
		return <Navigate to="/" replace/>
	}

	else{
		return children
	}

}

export default Protected;