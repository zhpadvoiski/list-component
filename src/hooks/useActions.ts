import { bindActionCreators } from "redux";
import * as UserActionCreator from "../store/action-creators/user";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(UserActionCreator, dispatch);
};
