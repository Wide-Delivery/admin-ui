import $api from "@/http";
import axios, { AxiosResponse } from "axios";
import { SignInFormInputs, TokenType } from "@/utils/types";
import { clearLocalStorageUserData } from "@/utils/utils";

export default class AuthService {
	static async login(
		userData: SignInFormInputs
	): Promise<AxiosResponse<TokenType>> {
		return $api
			.post<TokenType>("/auth/authenticate", userData)
			.then((res): TokenType => res.data);
	}

	static logout(): void {
		clearLocalStorageUserData();
	}
}
