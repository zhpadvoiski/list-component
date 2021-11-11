import { bindActionCreators } from "redux";
import ActionCreator from "../store/action-creators/";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(ActionCreator, dispatch);
};
