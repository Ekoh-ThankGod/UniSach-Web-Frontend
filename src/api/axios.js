import axios from "axios";

const BASE_URL = "https://unisach-dev.onrender.com";

export default axios.create({
	baseUrl: BASE_URL
})

export const axiosPrivate = axios.create({
	baseUrl: BASE_URL,
	headers: {"Content-Type" : "application/json"}
}); 