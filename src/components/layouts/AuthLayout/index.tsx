import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/AuthStore";
import { useAuthStoreType } from "@/store/AuthStore/types";
import { useEffect } from "react";
import { clearLocalStorageUserData } from "@/utils/utils";
import { hasAccess } from "@/utils/utils";
import { rolePermission } from "@/constants";

const AuthorizedLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = useAuthStore((state: useAuthStoreType) => state.isAuth);
	const setCurrentUser = useAuthStore(
		(state: useAuthStoreType) => state.setCurrentUser
	);
	const clearState = useAuthStore(
		(state: useAuthStoreType) => state.clearState
	);

	useEffect(() => {
		const checkAuth = async () => {
			let isAccess: boolean = false;
			const user = await setCurrentUser().catch((error) => null);

			if (user) {
				isAccess =
					hasAccess(pathname, rolePermission[user.role[0]]) ||
					pathname === "/profile";
			}

			if (!isAuth || !isAccess) {
				clearLocalStorageUserData();
				clearState();

				navigate("/sign-in");
			}
		};

		checkAuth();
	}, []);

	return <Outlet />;
};

export default AuthorizedLayout;
