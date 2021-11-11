import axios from "axios";
import { UserActionsTypes, IUser, IUserAction } from "../../types/user";
import { Dispatch } from "redux";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<IUserAction>) => {
        try {
            dispatch({
                type: UserActionsTypes.FETCH_USERS,
            });
            const resp = await axios.get<IUser[]>(usersUrl);
            setTimeout(() => {
                dispatch({
                    type: UserActionsTypes.FETCH_USERS_SUCCESS,
                    payload: resp.data,
                });
            }, 2000);
        } catch (e) {
            dispatch({
                type: UserActionsTypes.FETCH_USERS_FAILED,
                payload: "Error while fetcheing users",
            });
        }
    };
};
