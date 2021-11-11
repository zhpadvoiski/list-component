export enum UserActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAILED = "FETCH_USERS_FAILED",
}

interface FetchUsersAction {
    type: UserActionsTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersFailedAction {
    type: UserActionsTypes.FETCH_USERS_FAILED;
    payload: string;
}

export type IUserAction =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersFailedAction;

// interface IUserAction {
//     type: string;
//     payload?: any;
// }

export interface IUserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

interface Address {
    street: string;
    city: string;
    zipcode: string;
}
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}
