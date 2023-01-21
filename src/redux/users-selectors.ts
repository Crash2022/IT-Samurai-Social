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

export const filterUserSelector = (state: RootStateType) => {
    return state.usersPage.filter;
}

export const selectedUsers = (state: RootStateType) => state.usersPage.users
export const selectedCurrentPage = (state: RootStateType) => state.usersPage.currentPage
export const selectedPageSize = (state: RootStateType) => state.usersPage.pageSize
export const selectedTotalUsersCount = (state: RootStateType) => state.usersPage.totalUsersCount
export const selectedUsersIsLoading = (state: RootStateType) => state.usersPage.isLoading
export const selectedFollowingInProgress = (state: RootStateType) => state.usersPage.followingInProgress
export const selectedFilter = ((state: RootStateType) => state.usersPage.filter)

// пример reselect (аналог useMemo)
// внутри вычисления, принимает обычный селектор и зависимость
/*
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})*/
