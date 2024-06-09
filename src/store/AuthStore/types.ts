import { SignInFormInputs } from "@/utils/types";

export interface useAuthStoreType {
	isAuth: boolean;
	userInfo: null | any;
	login: (userData: SignInFormInputs) => Promise<void>;
	logout: () => void;
	clearState: () => void;
}
