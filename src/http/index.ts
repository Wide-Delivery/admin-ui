import axios from "axios";
import { useNavigate } from "react-router-dom";

const $api = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		if (
			(error.response.status === 403 || error.response.status === 401) &&
			error.config
		) {
			try {
				const navigate = useNavigate();
				navigate("/sign-in");
				return Promise.reject(error);
			} catch (e) {
				console.log("Forbidden");
			}
		}
		throw error;
	}
);

export default $api;
