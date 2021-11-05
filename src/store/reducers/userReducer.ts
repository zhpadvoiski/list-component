import { IUserAction, IUserState, UserActionsTypes } from "../../types/user";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: IUserAction): IUserState => {
    switch (action.type) {
        case UserActionsTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return { loading: false, users: action.payload, error: null };
        case UserActionsTypes.FETCH_USERS_FAILED:
            return { loading: false, error: action.payload, users: [] };
        default:
            return state;
    }
};

export default userReducer;
