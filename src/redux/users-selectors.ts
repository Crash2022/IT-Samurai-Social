import {RootStateType} from "./redux-store";

export const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users;
}

export const pageSizeSelector = (state: RootStateType) => {
    return state.usersPage.pageSize;
}

export const totalUsersCountSelector = (state: RootStateType) => {
    return state.usersPage.totalUsersCount;
}

export const currentPageSelector = (state: RootStateType) => {
    return state.usersPage.currentPage;
}

export const isLoadingSelector = (state: RootStateType) => {
    return state.usersPage.isLoading;
}

export const followingInProgressSelector = (state: RootStateType) => {
    return state.usersPage.followingInProgress;
}

export const filterUserNameSelector = (state: RootStateType) => {
    return state.usersPage.filter.term;
}

// пример reselect (аналог useMemo)
// внутри вычисления, принимает обычный селектор и зависимость
/*
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})*/
