import $api from "@/http";
import axios, { AxiosResponse } from "axios";
import { SignInFormInputs, TokenType } from "@/utils/types";

export default class UserService {
	static async fetchUser(): Promise<AxiosResponse<any>> {
		return $api.get<any>("/user").then((res): any => res.data);
	}
}
