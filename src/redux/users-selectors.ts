import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";

/*const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users;
}*/

// пример селектора (аналог useMemo)
// внутри вычисления, принимает обычный селектор и (зависимость)
/*
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})*/
