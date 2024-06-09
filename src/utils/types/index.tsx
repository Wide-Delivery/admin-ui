export interface SignInFormInputs {
	email: string;
	password: string;
}
export interface TokenType {
	accessToken: string;
	refreshToken: string;
}

export interface RoleRoutesType {
	routeLink: string;
	routeTitle: string;
}

export interface TicketType {
	id: string;
	title: string;
	description: string;
	status: string;
	priority: string;
	authorId: string;
	assigneeId: string | null;
	createdAt: string;
	updatedAt: string;
	conversation: MessageType[];
}

export interface MessageType {
	id: string;
	authorId: string;
	text: string;
	createdAt: number;
}

export interface OrderType {
	id: string;
	cargoHeight: number;
	cargoLength: number;
	cargoWeight: number;
	cargoWidth: number;
	createdAt: string;
	currentLocation: string;
	departureLatitude: string;
	departureLongitude: string;
	departureTime: string;
	description: string;
	destinationLatitude: string;
	destinationLongitude: string;
	destinationTime: string;
	driverId: string;
	needLoader: boolean;
	paymentMethod: string;
	status: string;
	updatedAt: string;
	userId: string;
}
