import {usersAPI} from "../common/api/api";
import {AppThunkType} from "./redux-store";

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
    filter: UsersSearchFilterType
}
export type UsersArray = {
    id: string
    name: string
    followed: boolean
    status: string
    photos: { small: string, large: string }
}
export type UsersSearchFilterType = {
    term: string
    friend: null | boolean
}

const initialState = {
    users: [] as Array<UsersArray>,
    pageSize: 20, // количество пользователей на одной странице
    totalUsersCount: 100, // количество пользователей приходит с сервера, теперь цифра не влияет
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    filter: {
        term: '',
        friend: null as null | boolean
    }
};

export const usersReducer = (state: UsersPropsType = initialState, action: UsersActionsType): UsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: true} : user)};
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user)
            };
        case 'SET_FILTER':
            return {...state, filter: action.payload };
        case 'SET_USERS':
            return {...state, users: action.users};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET_USERS_TOTAL_COUNT':
            return {...state, totalUsersCount: action.count}; // берём из Action Creator
        case 'TOGGLE_IS_LOADING':
            return {...state, isLoading: action.isLoading};
        case 'TOGGLE_FOLLOW_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.following
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type UsersActionsType =
    UserFollowACType |
    UserUnfollowACType |
    SetFilterACType |
    SetUsersACType |
    SetCurrentPageACType |
    setUsersTotalCountACType | // весь список пользователей
    ToggleIsLoadingACType |
    ToggleFollowInProgressACType;

export type UserFollowACType = ReturnType<typeof followAC>
export type UserUnfollowACType = ReturnType<typeof unfollowAC>
export type SetFilterACType = ReturnType<typeof setFilterAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export type ToggleIsLoadingACType = ReturnType<typeof toggleIsLoadingAC>
export type ToggleFollowInProgressACType = ReturnType<typeof toggleFollowInProgressAC>

export const followAC = (userId: string) => ({type: 'FOLLOW', id: userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', id: userId} as const)
export const setFilterAC = (payload: UsersSearchFilterType) => ({type: 'SET_FILTER', payload} as const)
export const setUsersAC = (users: Array<UsersArray>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', count: totalUsersCount} as const)
export const toggleIsLoadingAC = (isLoading: boolean) => ({type: 'TOGGLE_IS_LOADING', isLoading} as const)

export const toggleFollowInProgressAC = (userId: string, following: boolean) => ({
    type: 'TOGGLE_FOLLOW_IN_PROGRESS',
    userId, following
} as const)

/*-------------------------THUNK-------------------------*/

export const getUsersTC = (currentPage: number, pageSize: number, filterPayload: UsersSearchFilterType): AppThunkType => {

    return (dispatch) => {
        dispatch(toggleIsLoadingAC(true));

        usersAPI.getUsers(currentPage, pageSize, filterPayload.term, filterPayload.friend)
        .then(data => {
            dispatch(toggleIsLoadingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setFilterAC(filterPayload));
            dispatch(setCurrentPageAC(currentPage));
            dispatch(setUsersTotalCountAC(data.totalCount)); // все пользователи
        })
    }
}

export const deleteFollowTC = (userId: string): AppThunkType => {

    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(userId,true));

        usersAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowInProgressAC(userId,false));
            })
    }
}

export const postFollowTC = (userId: string): AppThunkType => {

    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(userId,true));

        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowInProgressAC(userId,false));
            })
    }
}