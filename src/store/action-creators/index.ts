import * as TodoActionsCreator from "./todo";
import * as UserActionsCreator from "./user";

const actions = {
    ...TodoActionsCreator,
    ...UserActionsCreator,
};

export default actions;
