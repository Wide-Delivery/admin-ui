import { create } from "zustand";
import { SignInFormInputs } from "@/utils/types";
import AuthService from "@/services/AuthService";
import { setLocalStorageUserData } from "@/utils/utils";
import { useAuthStoreType } from "./types";
import UserService from "@/services/UserService";

const useAuthStore = create<useAuthStoreType>((set) => ({
	isAuth: !!localStorage.getItem("token"),
	userInfo: null,

	setCurrentUser: async () => {
		try {
			const userResponse = await UserService.fetchUser();
			set({ userInfo: userResponse });
			return userResponse;
		} catch (error) {
			console.error("User fetch failed:", error);
			throw error;
		}
	},
	clearState: () => {
		set({ isAuth: false, userInfo: null });
	},
	login: async (userData: SignInFormInputs) => {
		try {
			const tokenResponse = await AuthService.login(userData);
			setLocalStorageUserData(tokenResponse);
			const userResponse = await UserService.fetchUser();

			set({ isAuth: true, userInfo: userResponse });
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	},
	logout: () => {
		AuthService.logout();
		set({ isAuth: false, userInfo: null });
	},
}));

export default useAuthStore;
