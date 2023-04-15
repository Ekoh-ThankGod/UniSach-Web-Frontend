import {axiosPrivate} from "../api/axios.js";
import {useEffect} from "react";
import useRefreshToken from "./useRefreshToken.js";

const useAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user.accessToken);

	useEffect(() => {

		const requestIntercept = axiosPrivate.interceptors.request.use(
			config => {
				if(!config.headers["Authorization"]){
					config.headers["Authorization"] = `Bearer ${user?.accessToken}`;
					return config;
				}
			}, (error) => Promise.reject(error)
		);

		const responseIntercept = axiosPrivate.interceptors.response.use(
			response => response,
			async (error) => {
				const prevRequest = error?.config;
				if(error?.response?.status === 401 && !prevRequest?.sent){
					prevRequest.sent = true;

					const newAccessToken = await refresh();
					console.log(newAccessToken);
					user.accessToken = newAccessToken;

					localStorage.setItem("user", JSON.stringify(user));

					prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
					return axiosPrivate(prevRequest);
				}

				return Promise.reject(error?.cancelToken)
			}
			
		)

		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept);
			axiosPrivate.interceptors.response.eject(responseIntercept);
		}

	}, [refresh])

	return axiosPrivate;
}

export default useAxiosPrivate;